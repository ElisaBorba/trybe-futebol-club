import { Request, Router, Response } from 'express';
import UserController from '../controllers/user.controller';

const loginController = new UserController();

const loginRoutes = Router();

loginRoutes.post('/', (req: Request, res: Response) =>
  loginController.login(req, res)
);
export default loginRoutes;
