import * as mongoose from 'mongoose';
import { userType, commentType } from './user';
import { reactionType } from './reaction';

const Schema = mongoose.Schema;

export type tagType = mongoose.Document & {
  name: String;
};
const tagSchema = new Schema({
  name: String,
});
const tag = mongoose.model('Tag', tagSchema);

export type videoType = mongoose.Document & {
  id: String,
  user: userType,
  url: String,
  vaild: Boolean,
  rank: Number,
  comments: [commentType],
  tags: [tagType],
  reactions: {
    good: [reactionType],
  },
};

const videoSchema = new mongoose.Schema(
  {
    id: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    url: String,
    vaild: Boolean,
    rank: Number,
    comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
    tags: { type: [Schema.Types.ObjectId], ref: 'Tag' },
    reactions: {
      good: { type: [Schema.Types.ObjectId], ref: 'Reaction' },
    },
  },
  { timestamps: true },
);

const videoModel = mongoose.model('Video', videoSchema);
export default videoModel;
