import * as Express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as multer from 'multer';
import * as uuidv1 from 'uuid/v1';
import * as ffmpeg from 'fluent-ffmpeg';

import logger from '../util/logger';

import video, { default as Video, videoType } from '../models/video';
import { default as userModel, commentType, commentModel } from '../models/user';

const uploaddir = path.join('upload');
const router = Express.Router();
const upload = multer({ dest: uploaddir });

// let defaultUser:userType;
const outdir = path.join('out');

// create temp directory
if (!fs.existsSync(uploaddir)) {
  fs.mkdirSync(uploaddir);
}
if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir);
}

/**
 * Response video lists
 */
router.get(
  '/',
  (req: Express.Request, res: Express.Response) => {
    logger.debug(req.session!['user']);
    video.find()
    .populate('user')
    .exec((err: any, docs: videoType[]) => {
      return res.json({
        videos: docs,
      });
    });
  },
);

/**
 * get video
 */
router.get(
  '/:id',
  (req: Express.Request, res: Express.Response) => {
    const videoId = req.params.id;
    video.findOne({ vaild:true, id: videoId })
    .populate('user')
    .populate({ path: 'comments', populate: {
      path: 'user',
      model: userModel,
    }})
    .exec((err: any, doc: videoType) => {
      return res.json(doc);
    });
  },
);

/**
 * upload video
 */
router.post(
  '/',
  upload.single('video'),
  (req: Express.Request, res: Express.Response) => {
    const uuid = uuidv1();
    if (req.file) {
      if (req.file.path) { // file found
        // check file format
        if (/\.mp4/i.test(req.file.originalname)) {
          let messageTags: string[] = [];
          let messageText: string = '';
          if (req.body.message) {
            messageText = req.body.message;
            messageTags = findTags(messageText);
          }

          const video = new Video({
            id: uuid,
            user: req.session!['user'],
            url: `/${outdir}/${uuid}/video.m3u8`,
            vaild: true,
            rank: 1,
            comments: [],
            tags: messageTags,
            message: messageText,
            reactions: {
              like: 0,
            },
          });

          // create directory in output directory
          fs.mkdirSync(`${outdir}/${uuid}`);
          const output = `${outdir}/${uuid}/video.m3u8`;
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
            logger.info(`Transcoding succeeded! video-id:${uuid},` +
            ` uploaded by ${req.session!['user'].name}`);

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

/**
 * update video
 */
router.put(
  '/:id',
  (req: Express.Request, res: Express.Response) => {
    const videoId = req.params.id;
    const message = req.body.message;
    if (message) {
      const messageTags: string[] = findTags(message);
      video.findOne({ vaild:true, id: videoId })
      .populate('user')
      .populate({ path: 'comments', populate: {
        path: 'user',
        model: userModel,
      }})
      .exec((err: any, doc: videoType) => {
        doc.message = message;
        doc.tags = messageTags;
        doc.save();
        return res.json(doc);
      });
    }

    return res.send(400);
  },
);

/**
 * modify valid/invalid video
 */
router.patch(
  '/:id',
  (req: Express.Request, res: Express.Response) => {
    const videoId = req.params.id;
    const valid = req.body.valid;
    if (valid != null) {
      video.findOne({ id: videoId })
      .exec((err: any, doc: videoType) => {
        doc.vaild = valid;
        doc.save();
      });
    }
    return res.send(200);
  },
);

/**
 * delete video
 */
router.delete(
  '/:id',
  (req: Express.Request, res: Express.Response) => {
    const videoId = req.params.id;
    video.deleteOne({ vaild:false, id: videoId })
    .exec((err: any) => {
      return res.send(200);
    });
  },
);

/**
 * comment to video
 */
router.post(
  '/:id/comments',
  (req: Express.Request, res: Express.Response) => {
    if (req.body && req.body.message) {
      const videoId = req.params.id;
      const message = req.body.message;
      const comment: commentType = <commentType>new commentModel(
        { text: message, user: req.session!['user'], like: 0 });
      video.findOne({ vaild:true, id: videoId })
      .exec((err: any, doc: videoType) => {
        if (doc) {
          comment.save();
          doc.comments.push(comment._id);
          doc.save();
        }
      });
      return res.send(200);
    }
    return res.send(400);
  },
);

/**
 * delete comment of video
 */
router.delete(
  '/:id/comments/:commentid',
  (req: Express.Request, res: Express.Response) => {
    const videoId = req.params.id;
    const commentId: string = req.params.commentid;
    video.findOne({ vaild:true, id: videoId })
    .exec((err: any, doc: videoType) => {
      if (doc) {
        const comments = doc.comments;
        comments.forEach((c, i) => {
          if (c.id === commentId) {
            comments.splice(i, 1);
          }
        });
        doc.comments = comments;
        commentModel.deleteOne({ _id: commentId }).exec();
        doc.save();
      }
    });
    return res.send(200);
  },
);

 /**
  * reaction like
  */
router.post(
  '/:id/reactions/like',
  (req: Express.Request, res: Express.Response) => {
    if (req.body && req.body.message) {
      const videoId = req.params.id;
      video.findOne({ vaild:true, id: videoId })
      .exec((err: any, doc: videoType) => {
        if (doc) {
          doc.reactions.like = doc.reactions.like + 1;
          doc.save();
        }
      });
      return res.send(200);
    }
    return res.send(400);
  },
);

/**
  * reaction unlike
  */
router.delete(
  '/:id/reactions/like',
  (req: Express.Request, res: Express.Response) => {
    if (req.body && req.body.message) {
      const videoId = req.params.id;
      video.findOne({ vaild:true, id: videoId })
      .exec((err: any, doc: videoType) => {
        if (doc) {
          doc.reactions.like = doc.reactions.like - 1;
          if (doc.reactions.like < 0) doc.reactions.like = 0;
          doc.save();
        }
      });
      return res.send(200);
    }
    return res.send(400);
  },
);

function findTags(message: string): string[] {
  let tags: string[]|null = [];
  if (message) {
    tags = message.match(/\#[^\s]+/g);
  }
  return tags || [];
}

export default router;
