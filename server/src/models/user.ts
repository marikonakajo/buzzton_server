import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export type userType = mongoose.Document & {
  name: String,
  id: String,
};
const userSchema = new Schema({
  name: String,
  id: String,
});

export type commentType = mongoose.Document & {
  user: userType,
  good: Number,
  text: String,
};
const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  good: Number,
  text: String,
});

const userModel = mongoose.model('User', userSchema);
const commentModel = mongoose.model('Comment', commentSchema);

export { userModel, commentModel };
export default userModel;
