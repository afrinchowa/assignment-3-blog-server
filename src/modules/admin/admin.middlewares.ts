/* eslint-disable @typescript-eslint/no-namespace */
// authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtCustomPayload } from './jwt.types'; // Import the custom payload type

// Extend Express Request to include `user` with the correct type
declare global {
  namespace Express {
    interface Request {
      user?: { userId: string; isAdmin: boolean };
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from 'Authorization: Bearer <token>'

    if (!token) {
      // Directly respond without using `return`
      res.status(401).json({
        success: false,
        message: 'No token provided',
      });
      return; // This stops further execution but is not a return value of the middleware
    }

    // Verify the token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtCustomPayload;

    // Attach the user info to the request object
    req.user = { userId: decoded.userId, isAdmin: decoded.isAdmin };

    // Check if user is an admin
    if (!decoded.isAdmin) {
      // Directly respond without using `return`
      res.status(403).json({
        success: false,
        message: 'Forbidden: You do not have admin rights',
      });
      return; // This stops further execution but is not a return value of the middleware
    }

    next(); // Continue to the next middleware or route handler
  } catch (error) {
    // Directly respond without using `return`
    res.status(401).json({
      success: false,
      message: 'Invalid token',
      error,
    });
  }
};
