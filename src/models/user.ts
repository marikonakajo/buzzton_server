import * as cloudant from '@cloudant/cloudant';
import { default as Cloudant } from '../services/cloudant';
import nano = require('nano');
import logger from '../util/logger';

const instance = Cloudant.instance();

/**
 * ユーザーは userid, name の属性を持つ
 */
export interface IUser extends nano.MaybeDocument {
  userid: string;
  name: string;
}
class User implements IUser {
  userid: string;
  name: string;
  constructor(userid: string, name: string) {
    this.userid = userid;
    this.name = name;
  }
}

export type UsersType = {

};

class UsersModel {
  usersdb: cloudant.DocumentScope<{}>;
  dbname:string = 'users';
  constructor() {
    // create database
    instance.db.create(this.dbname, (err, data) => {
      if (!err) { // err if database doesn't already exists
        console.log(`Created database: ${this.dbname}`);
      }
    });
    this.usersdb = instance.use(this.dbname);
  }

  /**
   * 登録済みのユーザーを検索する
   * @param id ユーザーID
   */
  find(id: string): Promise<IUser> {
    const q = {
      selector: {
        id: {
          $eq : id,
        },
      },
      fields : ['_id', 'name', 'id'],
    };
    return new Promise((resolve, reject) => {
      this.usersdb.find(q, (err, result) => {
        if (!err) {
          if (result.docs.length > 0) {
            const user:User = new User(result.docs[0]['id'], result.docs[0]['name']);
            resolve(user);
          } else {
            reject({});
          }
        } else {
          reject({});
        }
      });
    });
  }

  /**
   * ユーザーを登録する
   * @param id ユーザーID
   * @param name ユーザー名
   */
  create(id: string, name: string) {
    const doc:IUser = new User(id, name);
    this.usersdb.insert(doc).then((response: nano.DocumentInsertResponse) => {
      if (response.ok === true) {
        logger.info(`new user created ${doc.name}`);
      }
    });
  }

}

export default UsersModel;
