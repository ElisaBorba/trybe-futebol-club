import SequelizeMatches from '../database/models/SequelizeMatches';
import IMatchesModel from '../Interfaces/iMatchesModel';
import IMatches from '../Interfaces/iMatches';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;

  async findAll(): Promise<IMatches[]> {
    const dbMatches = await this.model.findAll();
    return dbMatches;
  }
}
