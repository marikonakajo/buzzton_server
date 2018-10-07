import * as Express from 'express';

const app = Express();
const PORT = process.env.PORT || 8888;
const mode = process.env.NODE_ENV;

app.get(
  '/list',
  (req: Express.Request, res: Express.Response) => {
    return res.json({
      type: 'list',
      data: [
        {
          aa : mode,
          bb : 'bbb',
        },
      ],
    });
  });

app.listen(
  PORT,
  () => {
    console.log(`LISTEN:${PORT} on docker`);
  });

export default app;
