import { createSelector } from '../store';
import { selectedTeam, selectTeams } from '../teams';

export const selectMatches = createSelector((state) => state.matches);

export const selectAllMatches = createSelector((state) => {
  const matches = selectMatches(state).data;
  const teams = selectTeams(state).data;

  const results = matches.map((match) => {
    return {
      away_team: teams.find(
        (team) => team.team_id === match.match_away_team_id
      ),
      home_team: teams.find(
        (team) => team.team_id === match.match_home_team_id
      ),
      ...match,
    };
  });

  return results;
});

export const selectDisplayMatches = createSelector((state) => {
  const matches = selectMatches(state).data;
  const teams = selectTeams(state).data;
  const filterMatch = selectedMatch(state);

  return matches
    .filter(
      (filter) =>
        filterMatch !== undefined &&
        filter.match_id.toString() === filterMatch.toString()
    )
    .map((match) => {
      return {
        away_team: teams.find(
          (team) => team.team_id === match.match_away_team_id
        ),
        home_team: teams.find(
          (team) => team.team_id === match.match_home_team_id
        ),
        ...match,
      };
    });
});

export const selectDisplayMatchesByTeam = createSelector((state) => {
  const matches = selectMatches(state).data;
  const teams = selectTeams(state).data;
  const filterTeam = selectedTeam(state);

  return matches
    .filter(
      (filter) =>
        filterTeam !== undefined &&
        (filter.match_away_team_id.toString() ===
          filterTeam.team_id.toString() ||
          filter.match_home_team_id.toString() ===
            filterTeam.team_id.toString())
    )
    .map((match) => {
      return {
        away_team: teams.find(
          (team) => team.team_id === match.match_away_team_id
        ),
        home_team: teams.find(
          (team) => team.team_id === match.match_home_team_id
        ),
        ...match,
      };
    });
});

export const selectedMatch = createSelector((state) => {
  const matches = selectMatches(state).data;
  const teams = selectTeams(state).data;

  let selectedMatch = state.matches.selectedMatch;

  const output = matches
    .map((match) => {
      return {
        away_team: teams.find(
          (team) => team.team_id === match.match_away_team_id
        ),
        home_team: teams.find(
          (team) => team.team_id === match.match_home_team_id
        ),
        ...match,
      };
    })
    .find(
      (filter) =>
        state.matches.selectedMatch !== '' &&
        filter.match_id.toString() === selectedMatch
    );
  return output;
});
