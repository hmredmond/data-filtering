import React from 'react';
import {
  ExpectedGoals,
  Passes,
  Scoring,
  TimePlayed,
  FieldPlay,
} from '../DataVisualisations';

const PlayerStatistics = ({ playerStatistics, teamTotals }) => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-2">
        <ExpectedGoals playerStatistics={playerStatistics} />

        <TimePlayed
          playerStatistics={playerStatistics}
          teamTotals={teamTotals}
        />

        <Scoring playerStatistics={playerStatistics} teamTotals={teamTotals} />

        <Passes playerStatistics={playerStatistics} />
        {playerStatistics.player_shots_faced === 0 && (
          <FieldPlay playerStatistics={playerStatistics} />
        )}
      </div>
    </section>
  );
};

export { PlayerStatistics };
