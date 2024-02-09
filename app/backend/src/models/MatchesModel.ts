import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import IMatchesModel from '../Interfaces/iMatchesModel';
import IMatches, { ICreateMatches } from '../Interfaces/iMatches';
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

  async update(
    id: IMatches['id'],
    data: Partial<NewEntity<IMatches>>
  ): Promise<IMatches | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } });
    if (affectedRows === 0) return null;
    return this.findById(id);
  }

  async hometeamExists(teamId: IMatches['homeTeamId']): Promise<boolean> {
    const team = await this.model.findOne({ where: { homeTeamId: teamId } });
    return !!team;
  }

  async awayteamExists(teamId: IMatches['awayTeamId']): Promise<boolean> {
    const team = await this.model.findOne({ where: { awayTeamId: teamId } });
    return !!team;
  }

  async create(data: NewEntity<ICreateMatches>): Promise<IMatches> {
    const dbData = await this.model.create(data);
    const { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals }: IMatches =
      dbData;
    return {
      id: dbData.id,
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress: true,
    };
  }
}
