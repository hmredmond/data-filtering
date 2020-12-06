import React, { Fragment } from 'react';
import classnames from 'classnames';
import { formatDate, formatTime } from '../../utils/formatting';

const MatchResult = ({ match }) => (
  <Fragment>
    <div className="grid grid-cols-9 py-4">
      <div className="text-center  text-gray-400 text-lg col-span-9 ">
        <span className="px-2">{formatDate(match.match_date)}</span>
        <span>(KO {formatTime(match.match_date)})</span>
      </div>

      <div className="text-left text-3xl font-bold col-span-3">
        {match.home_team.team_name}
      </div>
      <div
        className={classnames('text-2xl text-right', {
          'font-bold  text-gray-800':
            match.match_away_score > match.match_home_score,
        })}
      >
        {match.match_home_score}
      </div>
      <div className="text-xl text-center">-</div>
      <div
        className={classnames('text-2xl text-left', {
          'font-bold text-gray-900':
            match.match_away_score < match.match_home_score,
        })}
      >
        {match.match_away_score}
      </div>
      <div className="text-right text-3xl font-bold  col-span-3">
        {match.away_team.team_name}
      </div>

      {match.match_home_penalty_score && (
        <Fragment>
          <div
            className={classnames(
              'text-gray-500 text-lg text-right col-span-4',
              {
                'font-bold':
                  match.match_away_penalty_score <
                  match.match_home_penalty_score,
              }
            )}
          >
            ({match.match_home_penalty_score})
          </div>
          <div className="text-sm text-gray-500  text-center col-span-1 py-1">
            Penalties
          </div>
          <div
            className={classnames(
              'text-gray-500 text-lg text-left col-span-4',
              {
                'font-bold':
                  match.match_away_penalty_score >
                  match.match_home_penalty_score,
              }
            )}
          >
            ({match.match_away_penalty_score})
          </div>
        </Fragment>
      )}
    </div>
  </Fragment>
);

export { MatchResult };
