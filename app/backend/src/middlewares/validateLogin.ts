import { Request, Response, NextFunction } from 'express';

function validateLogin(
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  const regex = /^[\w.-]+@(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
  const { email } = req.body;
  const { password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (!regex.test(email) || password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
}

export default validateLogin;
