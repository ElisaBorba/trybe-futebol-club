const match = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
  inProgress: false,
  homeTeam: {
    teamName: 'São Paulo',
  },
  awayTeam: {
    teamName: 'Grêmio',
  },
};

const match2 = {
  id: 41,
  homeTeamId: 16,
  homeTeamGoals: 2,
  awayTeamId: 9,
  awayTeamGoals: 0,
  inProgress: true,
  homeTeam: {
    teamName: 'São Paulo',
  },
  awayTeam: {
    teamName: 'Internacional',
  },
};

const match3 = {
  id: 42,
  homeTeamId: 6,
  homeTeamGoals: 1,
  awayTeamId: 1,
  awayTeamGoals: 0,
  inProgress: true,
  homeTeam: {
    teamName: 'Ferroviária',
  },
  awayTeam: {
    teamName: 'Avaí/Kindermann',
  },
};

const matchToCreate = {
  homeTeamId: 16, 
  awayTeamId: 8, 
  homeTeamGoals: 2,
  awayTeamGoals: 2
}

const matchCreated = {
  id: 1,
  homeTeamId: 16, 
  awayTeamId: 8, 
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
}

const equalTeams = {
  id: 1,
  homeTeamId: 16, 
  awayTeamId: 16, 
  homeTeamGoals: 2,
  awayTeamGoals: 2
}

const errResponseEqualTeams = { message: "It is not possible to create a match with two equal teams"  }

const allMatches = [match, match2, match3];
const allMatchesInProgress = [match2, match3];
const allFinishedMatches = [match];

export default { allMatches, allMatchesInProgress, allFinishedMatches, matchToCreate, errResponseEqualTeams, matchCreated, equalTeams };
