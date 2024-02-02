import { Request, Response } from 'express';
import TeamsService from '../services/teamsService.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamsController {
  constructor(private teamsService = new TeamsService()) {}

  public async getAllTeams(_req: Request, res: Response) {
    const { status, data } = await this.teamsService.getAllTeams();
    res.status(mapStatusHTTP(status)).json(data);
  }

  public async findTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.teamsService.findTeamById(Number(id));
    res.status(mapStatusHTTP(status)).json(data);
  }
}
