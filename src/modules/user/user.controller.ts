import { Request, Response, NextFunction, RequestHandler } from 'express';
import { loginValidation, registerValidation } from './user.validation';
import { loginUser, registerUser } from './user.service';

// Controller for user registration
export const register: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validate the request body and throw an error directly if validation fails
    const { error } = registerValidation.validate(req.body);
    // We throw the error if validation fails; the catch block will handle it
    if (error) throw new Error('Validation error');

    // Register the user
    const user = await registerUser(req.body);
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      statusCode: 201,
      data: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};

// Controller for user login
export const login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { error } = loginValidation.validate(req.body);

    if (error) throw new Error('Validation error');

    const { email, password } = req.body;
    const token = await loginUser(email, password);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      statusCode: 200,
      data: { token },
    });
  } catch (error) {
    next(error);
  }
};
