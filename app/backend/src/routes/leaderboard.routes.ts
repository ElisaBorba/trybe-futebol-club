import { Request, Router, Response } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardController = new LeaderboardController();

const leaderboardRoutes = Router();

leaderboardRoutes.get('/', (req: Request, res: Response) =>
  leaderboardController.getStandings(req, res)
);

export default leaderboardRoutes;
