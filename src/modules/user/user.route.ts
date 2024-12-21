import { Router } from 'express';
import { login, register } from './user.controller';

const userRouter = Router();
// Route for user registration
userRouter.post('/register', register);

// Route for user login
userRouter.post('/login', login);

export default userRouter;
