import express, { Request, Response } from 'express';
import userRouter from './modules/user/user.route';
import blogRouter from './modules/blog/blog.route';
import adminRouter from './modules/admin/admin.route';
const app = express();

// middleware
app.use(express.json());

app.use('/api/auth', userRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/admin', adminRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is live',
  });
});
export default app;
