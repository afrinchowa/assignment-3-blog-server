// request and response manage

import { Request, Response } from 'express';
import { userService } from './user.service';



const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await userService.createUser(payload);
    res.json({
      status: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something Went Wrong',
      error,
    });
  }
};



export const userController = {
  createUser,

};
