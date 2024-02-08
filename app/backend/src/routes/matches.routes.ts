import { Request, Router, Response } from 'express';
import MatchesController from '../controllers/matches.controller';
import validateToken from '../middlewares/validateToken';

const matchesController = new MatchesController();

const matchesRoutes = Router();

matchesRoutes.get('/', (req: Request, res: Response) =>
  matchesController.getAllMatches(req, res)
);
matchesRoutes.patch(
  '/:id/finish',
  validateToken,
  (req: Request, res: Response) => matchesController.finishMatch(req, res)
);
matchesRoutes.patch('/:id', validateToken, (req: Request, res: Response) =>
  matchesController.updateMatch(req, res)
);
export default matchesRoutes;
