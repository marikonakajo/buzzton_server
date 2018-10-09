import * as Express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as multer from 'multer';
import * as uuidv1 from 'uuid/v1';
import * as ffmpeg from 'fluent-ffmpeg';

const uploaddir = path.join('upload');
const router = Express.Router();
const upload = multer({ dest: uploaddir });

const list:any[] = [];

/**
 * Response video lists
 */
router.get('/', (req: Express.Request, res: Express.Response) => {
  list.push();
  return res.json({
    videos: list,
  });
});

router.post(
  '/',
  upload.single('video'),
  (req: Express.Request, res: Express.Response) => {
    const uuid = uuidv1();
    if (req.file) {
      console.log(req.file);
      console.log(req.file.path);
      console.log(req.file.filename);

      if (req.file.path) { // file found
        console.log(`video id = ${uuid}`);
        // check file format
        if (/\.mp4/i.test(req.file.originalname)) {
          const resdata = {
            id: uuid,
            url: `/${uuid}/video.m3u8`,
            userid: 'user1',
            username: 'user1 name',
            reactions: {},
            rank: (list.length + 1),
            comments: [],
            tags: [],
            timestamp: new Date(),
          };

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
            console.log(`progress: ${progress.percent}%`);
          })
          .on('stderr', (stderr) => {
            console.log(`stderr: ${stderr}`);
          })
          .on('error', (err, stdout, stderr) => {
            console.log(`Cannot process video: ${err.message}`);

            // remove temporary file
            fs.unlink(req.file.path, (err) => {
              if (err) {
                console.log('error. unlink file');
              }
            });
          })
          .on('end', (stdout, stderr) => {
            console.log('Transcoding succeeded !');

            // regist object to list
            list.push(resdata);

            // remove temporary file
            fs.unlink(req.file.path, (err) => {
              if (err) {
                console.log('error. unlink file');
              }
            });
          })
          .output(output)
          .run();

          // when success
          return res.send(resdata);
        }
      }
    } else {
      console.log('no file found');
    }

    return res.send(400);
  },
);

export default router;
