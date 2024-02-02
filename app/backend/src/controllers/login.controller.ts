import { Request, Response } from 'express';
// import TeamsService from '../services/teamsService.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LoginController {
  constructor(private loginController = new LoginController()) {}

  //   public async getAllTeams(_req: Request, res: Response) {
  //     const { status, data } = await this.teamsService.login();
  //     res.status(mapStatusHTTP(status)).json(data);
  //   }
}
