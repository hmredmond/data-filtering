import { createSelector } from '../store';

export const selectPlayers = createSelector((state) => state.players);

export const selectedPlayer = createSelector((state) => {
  if (state.players.selectedPlayer === '') return '';

  const players = selectPlayers(state).data;

  return players.find(
    (filter) =>
      filter.player_id.toString() === state.players.selectedPlayer.toString()
  );
});
