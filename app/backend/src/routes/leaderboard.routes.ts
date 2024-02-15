import { Request, Router, Response } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardController = new LeaderboardController();

const leaderboardRoutes = Router();

leaderboardRoutes.get('/home', (req: Request, res: Response) =>
  leaderboardController.getStandings(req, res)
);

leaderboardRoutes.get('/away', (req: Request, res: Response) =>
  leaderboardController.getStandings(req, res)
);

export default leaderboardRoutes;
