import IMatches from './iMatches';

export default interface IMatchesModel {
  findAll(inProgress?: boolean): Promise<IMatches[]>;
}
