import * as Express from 'express';
import compression from 'compression';
import expressSession from 'express-session';
import logger from './util/logger';
import bodyParser from 'body-parser';
import connectMongo from 'connect-mongo';
import bluebird from 'bluebird';
import mongoose from 'mongoose';

const mongoStore = connectMongo(expressSession);
// Connect to MongoDB
const mongoUrl = process.env.MONGODB_URI || 'mongo';
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, { useMongoClient: true }).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch((err) => {
  console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
  // process.exit();
});

const app = Express();
app.set('port', process.env.PORT || 8888);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: 'buzztonoton',
  store: new mongoStore({
    url: mongoUrl,
    autoReconnect: true,
  }),
}));
// const mode = process.env.NODE_ENV;

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
        version: 1.0,
        description: 'buzzton server',
      },
    });
  });

export default app;
