
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// jwt.types.ts




declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        isAdmin: boolean;
        role: string;
      };
    }
  }
}
