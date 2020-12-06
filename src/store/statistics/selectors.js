import { createSelector } from '../store';
import { selectedPlayer, selectPlayers } from '../players';
import { selectTeams } from '../teams';
import { selectedMatch, selectAllMatches } from '../matches';

export const selectStatistics = createSelector((state) => state.statistics);

export const selectDisplayStatistics = createSelector((state) => {
  const stats = selectStatistics(state).data;
  const players = selectPlayers(state).data;
  const matches = selectAllMatches(state);
  const teams = selectTeams(state).data;

  //filterable items
  const filterMatch = selectedMatch(state);

  return stats
    .filter(
      (filter) =>
        filterMatch !== undefined &&
        filter.match_id.toString() === filterMatch.match_id.toString()
    )
    .map((stat) => {
      return {
        ...stat,
        player: players.find((player) => player.player_id === stat.player_id),
        team: teams.find((team) => team.team_id === stat.team_id),
        match: matches.find(
          (match) => match.match_id.toString() === stat.match_id.toString()
        ),
      };
    })
    .sort((a, b) => {
      return a.team_id - b.team_id;
    });
});

export const selectStatisticsByPlayer = createSelector((state) => {
  const stats = selectStatistics(state).data;
  const filterPlayer = selectedPlayer(state);
  const filterMatch = selectedMatch(state);

  return stats.find(
    (filter) =>
      filterPlayer !== '' &&
      filter.player_id.toString() === filterPlayer.player_id.toString() &&
      filterMatch !== '' &&
      filter.match_id.toString() === filterMatch.match_id.toString()
  );
});
