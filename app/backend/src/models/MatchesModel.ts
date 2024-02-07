/* eslint-disable max-lines-per-function */
import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import IMatchesModel from '../Interfaces/iMatchesModel';
import { IMatchesWithTeamsNames } from '../Interfaces/iMatches';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;

  async findAll(): Promise<IMatchesWithTeamsNames[]> {
    let dbMatches: IMatchesWithTeamsNames[];

    try {
      dbMatches = await this.model.findAll({
        include: [
          { model: SequelizeTeams, as: 'homeTeam', attributes: ['teamName'] },
          { model: SequelizeTeams, as: 'awayTeam', attributes: ['teamName'] },
        ],
      });
    } catch (error) {
      // Trate os erros de acordo com sua lógica
      console.error('Erro ao buscar partidas:', error);
      throw error;
    }

    return dbMatches;
  }
}
