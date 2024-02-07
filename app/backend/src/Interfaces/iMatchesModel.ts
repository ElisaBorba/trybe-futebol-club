import { IMatchesWithTeamsNames } from './iMatches';

export default interface IMatchesModel {
  findAll(): Promise<IMatchesWithTeamsNames[]>;
}
