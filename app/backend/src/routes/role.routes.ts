import { Request, Router, Response } from 'express';
import UserController from '../controllers/user.controller';
import validateToken from '../middlewares/validateToken';

const userController = new UserController();

const roleRoutes = Router();

roleRoutes.get('/', validateToken, async (req: Request, res: Response) =>
  userController.role(req, res)
);
export default roleRoutes;
