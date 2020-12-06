import React from 'react';

const ExpectedGoals = ({ playerStatistics }) => (
  <div className=" col-span-2 col-start-2">
    {playerStatistics.player_shots_faced === 0 && (
      <div className="grid grid-cols-2 p-4">
        <div className="text-lg font-bold p-1 flex justify-end ">
          <span className="w-24 block text-right pr-3 ">Expected Goals</span>
        </div>
        <span className="p-2 text-3xl font-bold text-white bg-red-600 text-center self-center ">
          {playerStatistics.xg}
        </span>
      </div>
    )}
  </div>
);

export { ExpectedGoals };
