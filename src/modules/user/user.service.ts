import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from './user.interface';
import { User } from './user.model';


const JWT_SECRET = 'your_secret_key';

export const registerUser = async (userData: IUser) => {
  const { name, email, password } = userData;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role: 'user',
    isBlocked: false,
  });

  return await newUser.save();
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  if (user.isBlocked) throw new Error('User is blocked');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
  return { token };
};
