import express, { Request, Response } from 'express';
import userRouter from './modules/user/user.route';
import blogRouter from './modules/blog/blog.route';
const app = express();

// middleware
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/blogs', blogRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is live',
  });
});
export default app;
