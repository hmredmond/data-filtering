import React, { Fragment } from 'react';
import { setSelectedPlayer } from '../../store';
import classnames from 'classnames';

const TeamList = ({ stats, team, selectedPlayer }) => {
  const players = stats.filter((filter) => {
    return filter.team_id === team.team_id;
  });

  const hasPlayers = players.length > 0;

  return (
    <Fragment>
      <h3 className="text-lg font-bold pb-4 px-2">Players</h3>
      {!hasPlayers ? (
        <div className="p-2">No players available</div>
      ) : (
        <ul className="list-none">
          {players.map((stat, index) => {
            return (
              <li
                key={`team-list-${index}`}
                onClick={() => setSelectedPlayer(stat.player.player_id)}
                className={classnames(
                  'cursor-pointer my-2 py-2 px-2 leading-none hover:bg-gray-200 ',
                  {
                    ' font-bold ':
                      selectedPlayer &&
                      stat.player.player_id === selectedPlayer.player_id,
                  }
                )}
              >
                {stat.player.player_known_name
                  ? stat.player.player_known_name
                  : stat.player.player_name}
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export { TeamList };
