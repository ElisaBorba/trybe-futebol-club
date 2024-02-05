import { Request, Response, NextFunction } from 'express';
import jwtUtil from '../utils/jwt.utils';
import SequelizeUsers from '../database/models/SequelizeUsers';

async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = auth.split(' ')[1];
  console.log('TOKEN', token);

  try {
    const decoded = await jwtUtil.verify(token);

    if (!decoded || !decoded.email) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    const user = await SequelizeUsers.findOne({
      where: { email: decoded.email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}

export default validateToken;
