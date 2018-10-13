import * as Express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as multer from 'multer';
import * as uuidv1 from 'uuid/v1';
import * as ffmpeg from 'fluent-ffmpeg';

import logger from '../util/logger';

import video, { default as Video, videoType } from '../models/video';
import { default as userModel, userType } from '../models/user';

const uploaddir = path.join('upload');
const router = Express.Router();
const upload = multer({ dest: uploaddir });

let defaultUser:userType;

userModel.findOne({ id: 'a' }, (err: any, user: userType) => {
  defaultUser = user;
});

/**
 * Response video lists
 */
router.get('/', (req: Express.Request, res: Express.Response) => {
  video.find({ vaild:true })
  .populate('user')
  .exec((err: any, docs: videoType[]) => {
    return res.json({
      videos: docs,
    });
  });
});

/**
 * comment to video
 */

 /**
  * reaction
  */

/**
 * upload video
 */
router.post(
  '/',
  upload.single('video'),
  (req: Express.Request, res: Express.Response) => {
    const uuid = uuidv1();
    console.log(req.file);
    if (req.file) {
      if (req.file.path) { // file found
        // check file format
        if (/\.mp4/i.test(req.file.originalname)) {
          console.log(req.body);

          const video = new Video({
            id: uuid,
            user: defaultUser,
            url: `/${uuid}/video.m3u8`,
            vaild: true,
            rank: 1,
            comments: [],
            tags: [],
            reactions: {
              good: [],
            },
          });

          // create directory in output directory
          fs.mkdirSync(`out/${uuid}`);
          const output = `out/${uuid}/video.m3u8`;
          // do ffmpeg (conver mp4 to m3u8)
          ffmpeg(fs.createReadStream(req.file.path))
          .outputOptions([
            '-c:v copy',
            '-c:a copy',
          ])
          .on('progress', (progress, stdout, stderr) => {
            logger.debug(`progress: ${progress.percent}%`);
          })
          .on('stderr', (stderr) => {
            logger.error(`stderr: ${stderr}`);
          })
          .on('error', (err, stdout, stderr) => {
            logger.error(`Cannot process video: ${err.message}`);

            // remove temporary file
            fs.unlink(req.file.path, (err) => {
              if (err) {
                logger.error('error. unlink file');
              }
            });
          })
          .on('end', (stdout, stderr) => {
            logger.info(`Transcoding succeeded! video-id:${uuid}, uploaded by ${defaultUser.name}`);

            // save
            video.save((err: any) => {
              if (err) {
                logger.error(err);
              }
            });

            // remove temporary file
            fs.unlink(req.file.path, (err) => {
              if (err) {
                logger.error('error. unlink file');
              }
            });
          })
          .output(output)
          .run();

          // when success
          return res.json(video);
        }
      }
    } else {
      logger.error('No file found in uploaded request body.');
      return res.status(400).json({ message: 'No file found in uploaded request body.' });
    }

    return res.send(400);
  },
);

export default router;
