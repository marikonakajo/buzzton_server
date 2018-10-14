import * as mongoose from 'mongoose';
import { userType, commentType } from './user';

const Schema = mongoose.Schema;

export type videoType = mongoose.Document & {
  id: string,
  user: userType,
  url: string,
  vaild: boolean,
  rank: number,
  comments: [commentType],
  tags: [string],
  message: string,
  reactions: {
    like : number,
  },
};

const videoSchema = new mongoose.Schema(
  {
    id: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    url: String,
    vaild: Boolean,
    rank: Number,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    tags: [String],
    message: String,
    reactions: {
      like: Number,
    },
  },
  { timestamps: true },
);

const videoModel = mongoose.model('Video', videoSchema);
export default videoModel;
