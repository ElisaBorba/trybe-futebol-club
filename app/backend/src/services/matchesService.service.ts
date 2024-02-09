import MatchesModel from '../models/MatchesModel';
import IMatches from '../Interfaces/iMatches';
import IMatchesModel from '../Interfaces/iMatchesModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';
import { NewEntity } from '../Interfaces/iNewEntity';

const errorMessage =
  'It is not possible to create a match with two equal teams';

export default class MatchesService {
  constructor(private matchesModel: IMatchesModel = new MatchesModel()) {}

  public async getAllMatches(): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matchesModel.findAll();

    return { status: 'successful', data: allMatches };
  }

  public async getInProgressMatches(
    inProgress?: boolean
  ): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matchesModel.findAllInProgress(inProgress);

    return { status: 'successful', data: allMatches };
  }

  public async finishMatch(
    id: number
  ): Promise<ServiceResponse<ServiceMessage>> {
    const foundMatch = await this.matchesModel.findById(id);
    if (!foundMatch) {
      return { status: 'notFound', data: { message: `Match ${id} not found` } };
    }

    const updatedMatch = await this.matchesModel.finishedMatch(id);

    if (!updatedMatch) {
      return {
        status: 'conflict',
        data: { message: `There are no updates to perform this Match ${id}` },
      };
    }

    return { status: 'successful', data: { message: 'Finished' } };
  }

  public async updatedMatch(
    id: number,
    match: IMatches
  ): Promise<ServiceResponse<IMatches | null>> {
    try {
      const updatedMatch = await this.matchesModel.update(id, match);
      return { status: 'successful', data: updatedMatch };
    } catch (error) {
      return {
        status: 'conflict',
        data: { message: `There are no updates to perform this Match ${id}` },
      };
    }
  }

  public async createMatch(
    data: NewEntity<IMatches>
  ): Promise<ServiceResponse<IMatches>> {
    const homeTeam = await this.matchesModel.hometeamExists(data.homeTeamId);
    const awayTeam = await this.matchesModel.awayteamExists(data.awayTeamId);
    if (!homeTeam || !awayTeam) {
      return {
        status: 'notFound',
        data: { message: 'There is no team with such id!' },
      };
    }

    if (data.awayTeamId === data.homeTeamId) {
      return {
        status: 'unprocessableEntity',
        data: { message: errorMessage },
      };
    }
    const newMatch = await this.matchesModel.create(data);
    return { status: 'created', data: newMatch };
  }
}
