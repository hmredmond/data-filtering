import React from 'react';
import { FootballPitch } from './';

const Errors = ({ teamError, matchError, statisticError, playerError }) => {
  return (
    <div>
      <FootballPitch />
      <div className="flex flex-col w-full h-screen justify-center text-right px-10 ">
        <div className="font-bold text-3xl text-gray-400">
          Oops. Something went wrong
        </div>

        {teamError && (
          <div className="pt-5">Unable retrieve team data. {teamError}</div>
        )}
        {matchError && (
          <div className="pt-5">
            Unable to retrieve Match data. {matchError}
          </div>
        )}
        {statisticError && (
          <div className="pt-5">
            Unable to retrieve Statistics data. {statisticError}
          </div>
        )}
        {playerError && (
          <div className="pt-5">
            Unable to retrieve Players data. {playerError}
          </div>
        )}
      </div>
    </div>
  );
};

export { Errors };
