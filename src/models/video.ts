import { IUser } from './user';

import * as cloudant from '@cloudant/cloudant';
import { default as Cloudant } from '../services/cloudant';
import nano = require('nano');
import logger from '../util/logger';

const instance = Cloudant.instance();

/**
 * ユーザーは userid, name の属性を持つ
 */
interface IVideo extends nano.MaybeDocument {
  id: string;
  user: IUser[];
  url: string;
  vaild: boolean;
  rank: number;
  comments: string[];
  tags: string[];
  message: string;
  reactions: {
    like : number,
  };
}

const videoModel = mongoose.model('Video', videoSchema);
export default videoModel;
