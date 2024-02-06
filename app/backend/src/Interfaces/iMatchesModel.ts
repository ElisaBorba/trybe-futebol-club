import IMatches from './iMatches';

export default interface IMatchesModel {
  findAll(): Promise<IMatches[]>;
}
