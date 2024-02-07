import ITeams from './ITeams';

export default interface IMatches {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}
export interface IMatchesWithTeamsNames {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
  homeTeam: {
    teamName: ITeams['teamName'];
  };
  awayTeam: {
    teamName: ITeams['teamName'];
  };
}
