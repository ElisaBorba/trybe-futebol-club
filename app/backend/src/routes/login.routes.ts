import { Request, Router, Response } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../middlewares/validateLogin';

const userController = new UserController();

const loginRoutes = Router();

loginRoutes.post('/', validateLogin, async (req: Request, res: Response) =>
  userController.login(req, res));
loginRoutes.get('/role', async (req: Request, res: Response) =>
  userController.role(req, res));
export default loginRoutes;
