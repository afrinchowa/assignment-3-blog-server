import { BlogModel } from "../blog/blog.model";
import { User } from "../user/user.model";
import jwt from 'jsonwebtoken';

// Function to generate JWT token
export const generateAuthToken = (userId: string, isAdmin: boolean): string => {
  const payload = { userId, isAdmin };
  const secretKey = process.env.JWT_SECRET_KEY as string; // Your secret key (store in .env)
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token valid for 1 hour
  return token;
};

export const AdminServices = {
    toggleBlockUser: async (userId: string) => {
      const user = await User.findById(userId);
      if (!user) throw new Error('User not found');
  
      user.isBlocked = !user.isBlocked;
      await user.save();
      return user;
    },
  
    deleteBlogFromDB: async (blogId: string) => {
      const blog = await BlogModel.findByIdAndDelete(blogId);
      if (!blog) throw new Error('Blog not found');
      return blog;
    },
  };
  