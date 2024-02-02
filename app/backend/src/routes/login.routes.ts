import { Request, Router, Response } from 'express';
import LoginController from '../controllers/teams.controller';

const loginController = new LoginController();

const loginRoutes = Router();

// loginRoutes.post('/', (req: Request, res: Response) =>
//   LoginController.login(req, res)
// );
export default loginRoutes;
