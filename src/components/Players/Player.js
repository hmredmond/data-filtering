import React, { Fragment } from 'react';
import { connect, selectedPlayer, selectStatisticsByPlayer } from '../../store';
import PlayerDetails from './PlayerDetails';

import { PlayerStatistics } from './PlayerStatistics';

const mapStateToProps = (state) => ({
  selectedPlayer: selectedPlayer(state),
  playerStatistics: selectStatisticsByPlayer(state),
});

const Player = ({ selectedPlayer, playerStatistics, teamTotals }) => {
  return (
    <section className="col-span-8 relative">
      {playerStatistics === undefined ? (
        <div className="col-span-3 text-center py-10 bg-gray-50 text-gray-300 font-bold text-2xl">
          Select a player to view match statistics
        </div>
      ) : (
        <Fragment>
          <PlayerDetails />

          {playerStatistics !== undefined && (
            <PlayerStatistics
              playerStatistics={playerStatistics}
              teamTotals={teamTotals}
            ></PlayerStatistics>
          )}
        </Fragment>
      )}
    </section>
  );
};

export default connect(mapStateToProps)(Player);
