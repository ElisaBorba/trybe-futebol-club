import IMatches from './iMatches';

export default interface IMatchesModel {
  findAll(): Promise<IMatches[]>;
  findAllInProgress(inProgress?: boolean): Promise<IMatches[]>;
  findById(id: IMatches['id']): Promise<IMatches | null>;
  updatedMatch(id: IMatches['id']): Promise<IMatches | null>;
}
