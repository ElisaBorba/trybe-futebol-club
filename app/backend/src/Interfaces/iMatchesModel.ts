import IMatches from './iMatches';

export default interface IMatchesModel {
  findAll(inProgress?: boolean): Promise<IMatches[]>;
  findById(id: IMatches['id']): Promise<IMatches | null>;
  updatedMatch(id: IMatches['id']): Promise<IMatches | null>;
}
