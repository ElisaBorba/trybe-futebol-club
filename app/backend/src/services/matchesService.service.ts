import MatchesModel from '../models/MatchesModel';
import IMatches from '../Interfaces/iMatches';
import IMatchesModel from '../Interfaces/iMatchesModel';
import { ServiceMessage, ServiceResponse } from '../Interfaces/ServiceResponse';

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
      const updatedMatch = await this.matchesModel.updatedMatch(id, match);

      return { status: 'successful', data: updatedMatch };
    } catch (error) {
      return {
        status: 'conflict',
        data: { message: `There are no updates to perform this Match ${id}` },
      };
    }
  }
}
