/* eslint-disable max-lines-per-function */
// import { NewEntity } from '../Interfaces/iNewEntity';
import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import IMatchesModel from '../Interfaces/iMatchesModel';
import IMatches from '../Interfaces/iMatches';
import { NewEntity } from '../Interfaces/iNewEntity';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;
  async findAll(): Promise<IMatches[]> {
    const dbMatches = await this.model.findAll({
      include: [
        { model: SequelizeTeams, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return dbMatches;
  }

  async findAllInProgress(inProgress?: boolean): Promise<IMatches[]> {
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

  async findById(id: IMatches['id']): Promise<IMatches | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData == null) return null;
    return dbData;
  }

  async finishedMatch(id: IMatches['id']): Promise<IMatches | null> {
    const [affectedRows] = await this.model.update(
      { inProgress: false },
      { where: { id } }
    );
    if (affectedRows === 0) return null;
    return this.findById(id);
  }

  async updatedMatch(
    id: IMatches['id'],
    data: Partial<NewEntity<IMatches>>
  ): Promise<IMatches | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } });
    if (affectedRows === 0) return null;
    return this.findById(id);
  }
}
