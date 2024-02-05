import { Request, Router, Response } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../middlewares/validateLogin';

const loginController = new UserController();

const loginRoutes = Router();

loginRoutes.post('/', validateLogin, async (req: Request, res: Response) =>
  loginController.login(req, res)
);
export default loginRoutes;
