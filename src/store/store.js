import createState from 'react-copy-write';

const { Consumer, Provider, mutate, createSelector } = createState({
  matches: {
    data: [],
    selectedMatch: '',
    error: null,
  },
  teams: {
    data: [],
    selectedTeam: '',
    error: null,
  },
  statistics: {
    data: [],
    error: null,
  },
  players: {
    data: [],
    selectedPlayer: '',
    error: null,
  },
});

export { Consumer, Provider, mutate, createSelector };
