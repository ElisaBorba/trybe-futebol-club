import SequelizeTeams from '../database/models/SequelizeTeams';
import ITeamsModel from '../Interfaces/ITeamsModel';
import ITeams from '../Interfaces/ITeams';

export default class TeamModel implements ITeamsModel {
  private model = SequelizeTeams;

  async findAll(): Promise<ITeams[]> {
    const dbTeams = await this.model.findAll();

    return dbTeams.map(({ id, teamName }) => ({
      id,
      teamName,
    }));
  }

  async findById(id: ITeams['id']): Promise<ITeams | null> {
    const dbTeam = await this.model.findByPk(id);
    if (dbTeam == null) return null;
    const { teamName }: ITeams = dbTeam;

    return { id, teamName };
  }
}
