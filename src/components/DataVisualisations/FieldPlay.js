import React from 'react';
import { VictoryLegend, VictoryPie } from 'victory';

const FieldPlay = ({ playerStatistics }) => (
  <div className="col-span-4 ">
    <h4 className="text-center font-bold bg-gray-100 mb-2 p-2">In The Field</h4>
    <div className="grid grid-cols-4">
      <div className="col-span-1 ">
        <VictoryLegend
          width={150}
          centerTitle
          orientation="vertical"
          style={{ fontSize: 18 }}
          data={[
            {
              name: `Tackles (${playerStatistics.tackles})`,
              symbol: { fill: 'orange' },
            },
            {
              name: `Interceptions (${playerStatistics.interceptions})`,
              symbol: { fill: 'gold' },
            },
            {
              name: `Pressures (${playerStatistics.pressures})`,
              symbol: { fill: 'red' },
            },
          ]}
        />
      </div>
      <div className="col-span-2 ">
        <VictoryPie
          animate={{
            duration: 1000,
          }}
          colorScale={['orange', 'gold', 'red']}
          width={600}
          height={600}
          data={[
            {
              x: `Tackle${
                playerStatistics.tackles > 1 || playerStatistics.tackles === 0
                  ? 's'
                  : ''
              }`,
              y: playerStatistics.tackles,
              fill: 'red',
            },
            {
              x: `Interception${
                playerStatistics.interceptions > 1 ||
                playerStatistics.interceptions === 0
                  ? 's'
                  : ''
              }`,
              y: playerStatistics.interceptions,
              fill: 'blue',
            },
            {
              x: `Pressure${
                playerStatistics.pressures > 1 ||
                playerStatistics.pressures === 0
                  ? 's'
                  : ''
              }`,
              y: playerStatistics.pressures,
              fill: 'yellow',
            },
          ]}
          labels={({ datum }) =>
            datum.y > 0 ? `${(Math.round(datum.y * 10) / 10).toFixed(0)}` : ''
          }
          padAngle={({ datum }) => (datum.y > 0 ? 2 : 0)}
          innerRadius={150}
          labelRadius={({ innerRadius }) => innerRadius + 25}
          style={{
            labels: {
              fontSize: 32,
              fill: 'black',
            },
          }}
        />
      </div>
    </div>
  </div>
);

export { FieldPlay };
