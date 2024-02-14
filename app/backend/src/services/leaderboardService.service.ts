import LeaderboardModel from '../models/LeaderboardModel';
import IBoard from '../Interfaces/IBoard';
import IBoardModel from '../Interfaces/IBoardModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class LeaderboardService {
  constructor(private leaderboardModel: IBoardModel = new LeaderboardModel()) {}

  public async getStandings(): Promise<ServiceResponse<IBoard[]>> {
    const teamsPerformance = await this.leaderboardModel.findAll();

    return { status: 'successful', data: teamsPerformance };
  }
}
