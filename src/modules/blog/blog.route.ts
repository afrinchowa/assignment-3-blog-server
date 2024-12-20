

import { Router } from 'express';
import { BlogController } from './blog.controller';

const blogRouter = Router();
blogRouter.post('/', BlogController.createBlog);
blogRouter.get('/', BlogController.getAllBlogs);
blogRouter.get('/:id',BlogController.getSingleBlog);
blogRouter.put('/:id',BlogController.updateBlog);
blogRouter.delete('/:id',BlogController.deleteBlog);

export default blogRouter;
