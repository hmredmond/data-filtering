import { fetchTeams } from '../../utils/api';
import { setLocalStorage } from '../../utils/helpers';
import { mutate } from '../store';

export const loadTeams = async () => {
  try {
    const response = await fetchTeams();

    mutate((state) => {
      state.teams.data = response.data;
      state.teams.error = null;
    });
  } catch (error) {
    mutate((state) => {
      state.teams.error = String(error);
    });
  }
};

export const setSelectedTeam = (team_id) => {
  setLocalStorage('team_id', team_id);
  mutate((state) => {
    state.teams.selectedTeam = team_id.toString();
  });
};

export const clearSelectedTeam = () => {
  setLocalStorage('team_id', '');

  mutate((state) => {
    state.teams.selectedTeam = '';
  });
};
