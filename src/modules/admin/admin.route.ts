import { Router } from 'express';

import { blockUser, deleteBlog } from './admin.controller';
import { authMiddleware } from './admin.middlewares';
 // Import the authMiddleware

const adminRouter = Router();

// Protect these routes with the authMiddleware to verify admin
adminRouter.patch('/users/:userId/block', authMiddleware, blockUser);
adminRouter.delete('/blogs/:id', authMiddleware, deleteBlog);

export default adminRouter;
