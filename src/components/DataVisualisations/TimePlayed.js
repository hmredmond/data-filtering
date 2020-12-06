import React from 'react';
import { VictoryPie, VictoryLabel, VictoryAnimation } from 'victory';

const TimePlayed = ({ playerStatistics, teamTotals }) => (
  <div className=" col-span-2 col-start-1 border-r-2  pr-2">
    <h4 className="text-center font-bold bg-gray-100 mb-2 p-2">
      Time on pitch
    </h4>

    <svg viewBox="0 0 200 200" width="100%" height="100%">
      <VictoryPie
        standalone={false}
        animate={{ duration: 1000 }}
        width={200}
        height={200}
        data={[
          {
            x: 1,
            y:
              (playerStatistics.minutes_played /
                teamTotals[playerStatistics.team.team_id].max_mins_played) *
              100,
          },
          {
            x: 2,
            y:
              100 -
              (playerStatistics.minutes_played /
                teamTotals[playerStatistics.team.team_id].max_mins_played) *
                100,
          },
        ]}
        innerRadius={60}
        cornerRadius={25}
        labels={() => null}
        style={{
          data: {
            fill: ({ datum }) => {
              const color = datum.y > 45 ? 'green' : '#064277';
              return datum.x === 1 ? color : 'transparent';
            },
          },
        }}
      />
      <VictoryAnimation
        duration={1000}
        data={[
          {
            x: 1,
            y:
              (playerStatistics.minutes_played /
                teamTotals[playerStatistics.team.team_id].max_mins_played) *
              100,
          },
          {
            x: 2,
            y:
              100 -
              (playerStatistics.minutes_played /
                teamTotals[playerStatistics.team.team_id].max_mins_played) *
                100,
          },
        ]}
      >
        {() => {
          return (
            <VictoryLabel
              textAnchor="middle"
              verticalAnchor="middle"
              x={100}
              y={100}
              text={`${playerStatistics.minutes_played} mins`}
              style={{ fontSize: 14 }}
            />
          );
        }}
      </VictoryAnimation>
    </svg>
  </div>
);

export { TimePlayed };
