import { createSelector } from '../store';

export const selectTeams = createSelector((state) => state.teams);

export const selectTeamOptions = createSelector((state) => {
  const options = state.teams.data
    .map((team) => ({
      value: team.team_id,
      label: team.team_name,
    }))
    .sort(function (a, b) {
      var nameA = a.label.toUpperCase(); // ignore upper and lowercase
      var nameB = b.label.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    });

  return options;
});

export const selectedTeam = createSelector((state) => {
  if (state.teams.selectedTeam === '') return '';

  const teams = selectTeams(state).data;

  return teams.find(
    (filter) =>
      filter.team_id.toString() === state.teams.selectedTeam.toString()
  );
});
