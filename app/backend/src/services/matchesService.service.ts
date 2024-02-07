import MatchesModel from '../models/MatchesModel';
import IMatches from '../Interfaces/iMatches';
import IMatchesModel from '../Interfaces/iMatchesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(private matchesModel: IMatchesModel = new MatchesModel()) {}

  public async getAllMatches(
    inProgress?: boolean
  ): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matchesModel.findAll(inProgress);

    return { status: 'successful', data: allMatches };
  }
}
