// request and response manage

import { Request, Response } from 'express';

import { BlogServices } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await BlogServices.createBlogIntoDB(payload);
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Something Went Wrong',
      statusCode: 500,
      error,
    });
  }
};
const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const result = await BlogServices.getAllBlogsFromDB(query);
    res.status(200).json({
      success: true,
      message: 'Blogs retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      statusCode: 500,
      error,
    });
  }
};
const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BlogServices.getSingleBlogFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Blog retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      statusCode: 500,
      error,
    });
  }
};
const updateBlog = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const payload = req.body;
    const result = await BlogServices.updateBlogInDB(userId, payload);

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      statusCode: 500,
      error,
    });
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await BlogServices.deleteBlogFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      statusCode: 500,
      error,
    });
  }
};

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
