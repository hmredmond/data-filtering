import { fetchPlayers } from '../../utils/api';
import { setLocalStorage } from '../../utils/helpers';
import { mutate } from '../store';

export const loadPlayers = async () => {
  try {
    const response = await fetchPlayers();

    mutate((state) => {
      state.players.data = response.data;
      state.players.error = null;
    });
  } catch (error) {
    mutate((state) => {
      state.players.error = String(error);
    });
  }
};

export const setSelectedPlayer = (player_id) => {
  //do not set anything if it is undefined
  if (player_id === undefined) {
    player_id = '';
  }

  setLocalStorage('player_id', player_id);

  mutate((state) => {
    state.players.selectedPlayer = player_id.toString();
  });
};

export const clearSelectedPlayer = () => {
  setLocalStorage('player_id', '');
  mutate((state) => {
    state.players.selectedPlayer = '';
  });
};
