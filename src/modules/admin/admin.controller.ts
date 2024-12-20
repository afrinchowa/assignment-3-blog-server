import { Request, Response } from 'express';
import { AdminServices } from './admin.service';

export const blockUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await AdminServices.toggleBlockUser(userId);

    res.status(200).json({
      success: true,
      message: `User ${result.isBlocked ? 'blocked' : 'unblocked'} successfully`,
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

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;
    const result = await AdminServices.deleteBlogFromDB(blogId);

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
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
