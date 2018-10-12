import mongoose from 'mongoose';
import user, { userType } from './user';

const Schema = mongoose.Schema;

export enum reactionTypes {
  GOOD,
}

export type reactionType = mongoose.Document & {
  type: reactionTypes,
  user: userType,
};
const reactionSchema = new Schema({
  type: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const reactionModel = mongoose.model('Reaction', reactionSchema);

export { reactionModel };
export default reactionModel;
