import React, { Fragment } from 'react';
import { setSelectedMatch, clearSelectedPlayer } from '../../store';
import { formatDate, formatTime } from '../../utils/formatting';

const Match = ({ match }) => (
  <Fragment>
    {match !== undefined && match !== {} && (
      <div
        className="px-12 py-3 my-3 whitespace-nowrap hover:bg-gray-200 cursor-pointer"
        onClick={() => {
          setSelectedMatch(match.match_id);
          clearSelectedPlayer();
        }}
      >
        <div className="flex flex-col">
          <div className="flex flex-row sm:flex-wrap sm:space-x-6">
            <div className="text-2xl text-gray-900 self-center w-36">
              {match.home_team.team_name}
            </div>
            <div className="flex items-center text-2xl text-gray-900 font-bold self-center w-8">
              <span className="text-sm text-gray-400 font-normal w-6  pr-1">
                {match.match_home_penalty_score &&
                  `(${match.match_home_penalty_score})`}
              </span>
              {match.match_home_score}
            </div>
            <div className="flex items-center text-sm text-gray-500 self-center">
              -
            </div>
            <div className="flex items-center text-2xl text-gray-900 font-bold self-center w-8">
              {match.match_away_score}

              <span className="text-sm text-gray-400 font-normal w-6 pl-1">
                {match.match_away_penalty_score &&
                  `(${match.match_away_penalty_score})`}
              </span>
            </div>
            <div className="text-2xl text-gray-900 w-36 text-right">
              {match.away_team.team_name}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6 self-center">
            <div className="flex items-center text-sm text-gray-400 self-center italic">
              <div>{formatDate(match.match_date)}</div>
              <div className="match__date--small px-2">
                ({formatTime(match.match_date)})
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </Fragment>
);

export default Match;
