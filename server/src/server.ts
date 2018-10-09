import * as Express from 'express';

const app = Express();
const PORT = process.env.PORT || 8888;
// const mode = process.env.NODE_ENV;

// import routes
import video from './routes/video';

// add routes
app.use('/videos', video);

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

app.listen(
  PORT,
  () => {
    console.log(`LISTEN:${PORT} on docker`);
  });

export default app;
