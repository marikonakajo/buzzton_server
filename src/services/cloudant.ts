import * as cloudant from '@cloudant/cloudant';
const cfenv = require('cfenv');
import logger from '../util/logger';

class Cloudant {
  private static dbInstance;
  private constructor() {
  }
  public static get instance() {
    if (!this.dbInstance) {
      // load vcap
      let vcapLocal;
      try {
        vcapLocal = require('../vcap-local.json');
        console.log('Loaded local VCAP', vcapLocal);
      } catch (e) { }

      const appEnvOpts = vcapLocal ? { vcap: vcapLocal } : {};
      const appEnv = cfenv.getAppEnv(appEnvOpts);

      if (appEnv.services['cloudantNoSQLDB']) {
        const cred = appEnv.services['cloudantNoSQLDB'][0];
        const instance = this.dbInstance = cloudant(cred.url);

        instance.ping((pong) => {
          logger.debug(pong);
        });
      }
    }
    return this.dbInstance;
  }
}

export default Cloudant;
