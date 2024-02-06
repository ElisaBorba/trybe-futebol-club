import { Request, Router, Response } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesController = new MatchesController();

const matchesRoutes = Router();

matchesRoutes.get('/', (req: Request, res: Response) =>
  matchesController.getAllMatches(req, res)
);
export default matchesRoutes;