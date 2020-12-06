import {
  fetchStatistics,
  fetchPlayers,
  fetchTeams,
  fetchMatches,
} from '../../utils/api';

import { mutate } from '../store';

export const loadStatistics = async () => {
  try {
    const response = await fetchStatistics();

    mutate((state) => {
      state.statistics.data = response.data;
      state.statistics.error = null;
    });
  } catch (error) {
    mutate((state) => {
      state.statistics.error = String(error);
    });
  }
};

export const loadFullStatistics = async () => {
  try {
    const response = await fetchStatistics();
    const players = await fetchPlayers();
    const teams = await fetchTeams();
    const matches = await fetchMatches();

    mutate((state) => {
      state.statistics.data = response.data.map((stat) => {
        return {
          player: players.data.find(
            (player) => player.player_id === stat.player_id
          ),
          team: teams.data.find((team) => team.team_id === stat.team_id),
          match: matches.data.find((match) => match.match_id === stat.match_id),
          ...stat,
        };
      });
    });
  } catch (error) {
    mutate((state) => {
      state.statistics.error = String(error);
    });
  }
};
