import mongoose from 'mongoose';
import { userModel, commentModel, userType, commentType } from './user';
import { reactionModel, reactionType } from './reaction';

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
    user: { type: userModel, ref: 'User' },
    url: String,
    vaild: Boolean,
    rank: Number,
    comments: { type: [commentModel], ref: 'Comment' },
    tags: { type: [tag], ref: 'Tag' },
    reactions: {
      good: { type: [reactionModel], ref: 'Reaction' },
    },
  },
  { timestamps: true },
);

const videoModel = mongoose.model('User', videoSchema);
export default videoModel;
