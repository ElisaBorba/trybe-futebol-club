import IMatches, { ICreateMatches } from './iMatches';
import { NewEntity } from './iNewEntity';

export default interface IMatchesModel {
  findAll(): Promise<IMatches[]>;
  findAllInProgress(inProgress?: boolean): Promise<IMatches[]>;
  findById(id: IMatches['id']): Promise<IMatches | null>;
  finishedMatch(id: IMatches['id']): Promise<IMatches | null>;
  update(
    id: IMatches['id'],
    data: Partial<NewEntity<IMatches>>
  ): Promise<IMatches | null>;
  create(data: Partial<ICreateMatches>): Promise<IMatches>;
}
