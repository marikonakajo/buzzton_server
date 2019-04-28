import * as Express from 'express';
import * as compression from 'compression';
import * as expressSession from 'express-session';
import * as bodyParser from 'body-parser';
import logger from './util/logger';

/** app */
const app = Express();
app.set('port', process.env.PORT || 8888);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit:'5mb', extended: true, parameterLimit: 100000 }));
app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: 'buzztonoton',
}));

// auth middleware
import { default as UsersModel } from './models/user';
const usersModel = new UsersModel();

app.use(async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
  ) => {
  // verify auth credentials
  if (req.headers.authorization) {
    const base64Credentials =  req.headers.authorization!.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [userid] = credentials.split(':');

    logger.debug(userid);
    req.session!['user'] = await usersModel.find(userid).catch(() => {
      logger.debug(`Not found user ${userid}`)
    })
  }

  next();
});

/**
 * routes
 */
import * as videoRoute from './controllers/video';

// add routes
app.use('/videos', videoRoute.default);

app.get(
  '/version',
  (req: Express.Request, res: Express.Response) => {
    return res.json({
      type: 'server_version',
      data: {
        version: 1.01,
        description: 'buzzton server',
      },
    });
  });

export default app;
