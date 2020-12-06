import { fetchMatches } from '../../utils/api';
import { setLocalStorage } from '../../utils/helpers';
import { mutate } from '../store';

export const loadMatches = async () => {
  try {
    const response = await fetchMatches();

    mutate((state) => {
      state.matches.data = response.data;
      state.matches.error = null;
    });
  } catch (error) {
    mutate((state) => {
      state.matches.error = String(error);
    });
  }
};

export const setSelectedMatch = (match_id) => {
  if (match_id === undefined) {
    match_id = '';
  }
  setLocalStorage('match_id', match_id);

  mutate((state) => {
    state.matches.selectedMatch = match_id.toString();
  });
};

export const clearSelectedMatch = () => {
  setLocalStorage('match_id', '');
  mutate((state) => {
    state.matches.selectedMatch = '';
  });
};
