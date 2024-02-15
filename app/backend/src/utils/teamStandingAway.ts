// import IMatches from '../Interfaces/iMatches';
// import ITeams from '../Interfaces/ITeams';
// import IBoard from '../Interfaces/IBoard';

// function calculateTotalPoints(teamId: number, matches: IMatches[]): number {
//   return matches
//     .filter(
//       (match) => match.homeTeamId === teamId || match.awayTeamId === teamId
//     )
//     .reduce((totalPoints, match) => {
//       const { homeTeamGoals, awayTeamGoals } = match;
//       if (homeTeamGoals > awayTeamGoals) return totalPoints + 3;
//       if (homeTeamGoals < awayTeamGoals) return totalPoints;
//       return totalPoints + 1;
//     }, 0);
// }

// function calculateTotalGames(teamId: number, matches: IMatches[]): number {
//   return matches
//     .filter(
//       (match) => match.homeTeamId === teamId || match.awayTeamId === teamId
//     )
//     .filter((match) => match.inProgress === false).length;
// }

// function calculateTotalVictories(teamId: number, matches: IMatches[]): number {
//   return matches.filter(
//     (match) =>
//       !match.inProgress &&
//       ((match.homeTeamId === teamId &&
//         match.homeTeamGoals > match.awayTeamGoals) ||
//         (match.awayTeamId === teamId &&
//           match.awayTeamGoals < match.homeTeamGoals))
//   ).length;
// }

// function calculateTotalDraws(teamId: number, matches: IMatches[]): number {
//   return matches.filter(
//     (match) =>
//       !match.inProgress &&
//       ((match.homeTeamId === teamId &&
//         match.homeTeamGoals === match.awayTeamGoals) ||
//         (match.awayTeamId === teamId &&
//           match.awayTeamGoals === match.homeTeamGoals))
//   ).length;
// }

// function calculateTotalLosses(teamId: number, matches: IMatches[]): number {
//   return matches.filter(
//     (match) =>
//       !match.inProgress &&
//       ((match.homeTeamId === teamId &&
//         match.homeTeamGoals < match.awayTeamGoals) ||
//         (match.awayTeamId === teamId &&
//           match.awayTeamGoals > match.homeTeamGoals))
//   ).length;
// }

// function calculateGoalsFavor(teamId: number, matches: IMatches[]): number {
//   let goalsFavor = 0;

//   matches.forEach((match) => {
//     if (
//       !match.inProgress &&
//       (match.homeTeamId === teamId || match.awayTeamId === teamId)
//     ) {
//       if (match.homeTeamId === teamId) {
//         goalsFavor += match.homeTeamGoals;
//       } else {
//         goalsFavor += match.awayTeamGoals;
//       }
//     }
//   });

//   return goalsFavor;
// }

// function calculateGoalsOwn(teamId: number, matches: IMatches[]): number {
//   let goalsOwn = 0;

//   matches.forEach((match) => {
//     if (
//       !match.inProgress &&
//       (match.homeTeamId === teamId || match.awayTeamId === teamId)
//     ) {
//       if (match.homeTeamId === teamId) {
//         goalsOwn += match.awayTeamGoals;
//       } else {
//         goalsOwn += match.homeTeamGoals;
//       }
//     }
//   });

//   return goalsOwn;
// }

// function calculateGoalsBalance(teamId: number, matches: IMatches[]): number {
//   const goalsFavor = calculateGoalsFavor(teamId, matches);
//   const goalsOwn = calculateGoalsOwn(teamId, matches);

//   return goalsFavor - goalsOwn;
// }

// function calculateEfficiency(teamId: number, matches: IMatches[]): string {
//   const totalPoints = calculateTotalPoints(teamId, matches);
//   const totalGames = calculateTotalGames(teamId, matches);
//   const efficiency = (totalPoints / (totalGames * 3)) * 100;
//   return efficiency.toFixed(2);
// }

// export default function teamStandingFormatter(
//   team: ITeams,
//   matches: IMatches[]
// ): IBoard {
//   return {
//     name: team.teamName,
//     totalPoints: calculateTotalPoints(team.id, matches),
//     totalGames: calculateTotalGames(team.id, matches),
//     totalVictories: calculateTotalVictories(team.id, matches),
//     totalDraws: calculateTotalDraws(team.id, matches),
//     totalLosses: calculateTotalLosses(team.id, matches),
//     goalsFavor: calculateGoalsFavor(team.id, matches),
//     goalsOwn: calculateGoalsOwn(team.id, matches),
//     goalsBalance: calculateGoalsBalance(team.id, matches),
//     efficiency: calculateEfficiency(team.id, matches),
//   };
// }
