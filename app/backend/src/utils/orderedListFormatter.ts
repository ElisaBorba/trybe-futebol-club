import IBoard from '../Interfaces/IBoard';

export default function listFormat(teamList: IBoard[]): IBoard[] {
  teamList.sort((a, b) => {
    if (a.totalPoints === b.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }

    if (a.totalPoints === b.totalPoints) {
      return b.totalVictories - a.totalVictories;
    }

    if (a.totalPoints === b.totalPoints) {
      return b.goalsBalance - a.goalsBalance;
    }

    return b.goalsFavor - a.goalsFavor;
  });

  return teamList;
}
