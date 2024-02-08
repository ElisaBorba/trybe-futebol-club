import { Request, Response, NextFunction } from 'express';
import IUser from '../Interfaces/iUser';
import jwtUtil from '../utils/jwt.utils';
import UserModel from '../models/UserModel';

async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = await jwtUtil.verify(token);
    const userModel = new UserModel();
    const user = (await userModel.login(decoded.email)) as IUser;
    if (user) {
      next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Token must be a valid token' });
  }
}

export default validateToken;
