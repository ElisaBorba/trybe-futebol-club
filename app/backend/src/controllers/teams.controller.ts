import { Request, Response } from 'express';
import services from '../services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamsController {
  constructor(private teamsService = new services.TeamsService()) {}

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
