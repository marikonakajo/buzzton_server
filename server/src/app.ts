import * as Express from 'express';
import * as compression from 'compression';
import * as expressSession from 'express-session';
import * as bodyParser from 'body-parser';
import * as connectMongo from 'connect-mongo';
import * as bluebird from 'bluebird';
import * as mongoose from 'mongoose';

const mongoStore = connectMongo(expressSession);
// Connect to MongoDB // process.env.MONGODB_URI ||
const mongoUrl = 'mongodb://mongodb/buzztondb';
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch((err:any) => {
  console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
  // process.exit();
});

const app = Express();
app.set('port', process.env.PORT || 8888);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit:'5mb', extended: true, parameterLimit: 100000 }));
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
