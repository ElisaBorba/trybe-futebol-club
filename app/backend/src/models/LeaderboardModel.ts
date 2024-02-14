import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import IBoardsModel from '../Interfaces/IBoardModel';
import IBoard from '../Interfaces/IBoard';

export default class LeaderboardModel implements IBoardsModel {
  private teamsModel = SequelizeTeams;
  private matchesModel = SequelizeMatches;

  async findAll(): Promise<IBoard[]> {
    // const dbMatches = await this.matchesModel.findAll();
    // return dbMatches;
  }
}

// export default interface IBoard {
//   name: string;
//   totalPoints: number;
//   totalGames: number;
//   totalVictories: number;
//   totalDraws: number;
//   totalLosses: number;
//   goalsFavor: number;
//   goalsOwn: number;
//   goalsBalance: number;
//   efficiency: string;
// }

// import IBoard from './IBoard';

// export default interface IBoardModel {
//   findAll(): Promise<IBoard[]>;
// }
