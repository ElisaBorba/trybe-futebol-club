import teamStandingFormatter from '../utils/teamStandingHome';
import listFormat from '../utils/orderedListFormatter';
import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import IBoardsModel from '../Interfaces/IBoardModel';
import IBoard from '../Interfaces/IBoard';

export default class LeaderboardModel implements IBoardsModel {
  private teamsModel = SequelizeTeams;
  private matchesModel = SequelizeMatches;

  async findAll(): Promise<IBoard[]> {
    const dbMatches = await this.matchesModel.findAll({
      include: [
        { model: SequelizeTeams, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    const dbTeams = await this.teamsModel.findAll();

    const sortedTeams = listFormat(
      dbTeams.map((team) => teamStandingFormatter(team, dbMatches)),
    );

    return sortedTeams;
  }
}
