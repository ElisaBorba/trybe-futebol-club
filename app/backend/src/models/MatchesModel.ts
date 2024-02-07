/* eslint-disable max-lines-per-function */
import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import IMatchesModel from '../Interfaces/iMatchesModel';
import IMatches from '../Interfaces/iMatches';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;

  async findAll(inProgress?: boolean): Promise<IMatches[]> {
    const dbMatches = await this.model.findAll({
      include: [
        { model: SequelizeTeams, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    if (inProgress !== undefined) {
      return dbMatches.filter((match) => match.inProgress === inProgress);
    }

    return dbMatches;
  }
}
