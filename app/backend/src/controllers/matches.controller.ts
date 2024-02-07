import { Request, Response } from 'express';
import MatchesService from '../services/matchesService.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const { status, data } = await this.matchesService.getAllMatches(
      inProgress === 'true'
    );
    res.status(mapStatusHTTP(status)).json(data);
  }
}
