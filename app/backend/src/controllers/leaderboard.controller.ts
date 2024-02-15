import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) {}

  public async getStandings(_req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.getStandings();
    res.status(mapStatusHTTP(status)).json(data);
  }
}
