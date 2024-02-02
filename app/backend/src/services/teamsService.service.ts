import TeamsModel from '../models/TeamsModel';
import ITeams from '../Interfaces/ITeams';
import ITeamsModel from '../Interfaces/ITeamsModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamsService {
  constructor(private teamsModel: ITeamsModel = new TeamsModel()) {}

  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const allTeams = await this.teamsModel.findAll();
    return { status: 'successful', data: allTeams };
  }

  public async findTeamById(id: number): Promise<ServiceResponse<ITeams>> {
    const team = await this.teamsModel.findById(id);

    if (!team) {
      return { status: 'notFound', data: { message: 'Team not found' } };
    }

    return { status: 'successful', data: team };
  }
}
