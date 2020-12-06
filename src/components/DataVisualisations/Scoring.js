import React from 'react';
import { VictoryLabel, VictoryBar } from 'victory';

const chartProps = {
  width: 200,
  height: 200,
  barWidth: 55,
  animate: { duration: 1000 },
  labelComponent: <VictoryLabel dy={-10} />,
};

const Scoring = ({ playerStatistics, teamTotals }) => (
  <div className="col-span-2 ">
    <h4 className="text-center font-bold bg-gray-100 mb-2 p-2">Scoring</h4>
    {playerStatistics.shots === 0 &&
      playerStatistics.goals === 0 &&
      playerStatistics.player_shots_faced === 0 && (
        <div className="text-center pt-4 text-gray-500 font-bold">
          No shots or goals to display
        </div>
      )}

    {playerStatistics.player_shots_faced === 0 &&
      (playerStatistics.shots > 0 || playerStatistics.goals > 0) && (
        <div className=" p-5">
          <VictoryBar
            {...chartProps}
            data={[
              {
                x: `Shot${
                  playerStatistics.shots > 1 || playerStatistics.shots === 0
                    ? 's'
                    : ''
                }`,
                y: playerStatistics.shots,
              },
              {
                x: `Goal${
                  playerStatistics.goals > 1 || playerStatistics.goals === 0
                    ? 's'
                    : ''
                }`,
                y: playerStatistics.goals,
              },
            ]}
            labels={({ datum }) =>
              `${(Math.round(datum.y * 10) / 10).toFixed(0)} ${datum.x}`
            }
            style={{
              top: '-25px',
              data: {
                fill: ({ datum }) => {
                  const color =
                    playerStatistics.goals === playerStatistics.shots ||
                    playerStatistics.goals > 0
                      ? 'green'
                      : 'rgba(220, 38, 38, 1)';
                  return datum.y > 0 ? color : 'white';
                },
              },
              labels: {
                fontSize: '12px',
                fill: 'black',
              },
            }}
          />
        </div>
      )}
    {playerStatistics.player_shots_faced > 0 && (
      <div className=" p-5">
        <VictoryBar
          {...chartProps}
          data={[
            {
              x: `Shot${
                playerStatistics.player_shots_faced > 2 ||
                playerStatistics.player_shots_faced === 0
                  ? 's'
                  : ''
              } Faced`,
              y: playerStatistics.player_shots_faced,
            },
            {
              x: `Unsaved`,
              y: teamTotals[playerStatistics.team.team_id].score,
            },
          ]}
          labels={({ datum }) =>
            `${(Math.round(datum.y * 10) / 10).toFixed(0)} ${datum.x}`
          }
          style={{
            top: '-25px',
            data: {
              fill: ({ datum }) => {
                const color =
                  teamTotals[playerStatistics.team.team_id].score === 0
                    ? 'green'
                    : 'rgba(220, 38, 38, 1)';
                return datum.y > 0 ? color : 'white';
              },
            },
            labels: {
              fontSize: '12px',
              fill: 'black',
            },
          }}
        />
      </div>
    )}
  </div>
);

export { Scoring };
