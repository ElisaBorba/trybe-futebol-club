import { Request, Response } from 'express';
import MatchesService from '../services/matchesService.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    let matchesResponse;
    if (inProgress === 'true') {
      matchesResponse = await this.matchesService.getInProgressMatches(true);
    } else if (inProgress === 'false') {
      matchesResponse = await this.matchesService.getInProgressMatches(false);
    } else {
      matchesResponse = await this.matchesService.getAllMatches();
    }
    const { status, data } = matchesResponse;
    res.status(mapStatusHTTP(status)).json(data);
  }

  public async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.matchesService.finishMatch(Number(id));
    res.status(mapStatusHTTP(status)).json(data);
  }

  public async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const match = req.body;
    const { status, data } = await this.matchesService.updatedMatch(
      Number(id),
      match,
    );
    res.status(mapStatusHTTP(status)).json(data);
  }

  public async createMatch(req: Request, res: Response) {
    const { status, data } = await this.matchesService.createMatch(req.body);
    res.status(mapStatusHTTP(status)).json(data);
  }
}
