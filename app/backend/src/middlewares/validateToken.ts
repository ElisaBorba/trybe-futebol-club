// import { Request, Response, NextFunction } from 'express';
// // import jwtUtil from '../utils/jwt.utils';
// // import SequelizeUsers from '../database/models/SequelizeUsers';

// // const messageError = 'Token must be a valid token';

// async function validateToken(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void | Response> {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     return res.status(401).json({ message: 'Token not found' });
//   }

//   next();
// }

// export default validateToken;
