import React, { Fragment } from 'react';
import { isLightColor } from '../../utils/helpers';
import classnames from 'classnames';
import './Possession.scss';

const PossessionItem = ({ color, percentage, animationDirection = 'left' }) => (
  <div
    className={classnames(
      'px-4 py-3 font-bold animate',
      `animate-${animationDirection}`,
      `text-${animationDirection}`
    )}
    style={{
      backgroundColor: color,
      color: `${isLightColor(color) ? '#010101' : '#f1f1f1'}`,
      width: `${percentage}%`,
    }}
  >
    {percentage}
    <span className="text-sm">%</span>
  </div>
);

const getPercentage = (actual, alternative) => {
  return actual
    ? Math.round(actual.team_possession_percentage * 100)
    : 100 - Math.round(alternative.team_possession_percentage * 100);
};

const getPossession = (
  home_team,
  away_team,
  home_team_stats,
  away_team_stats
) => {
  return (
    <Fragment>
      <PossessionItem
        color={home_team.team_first_color}
        percentage={getPercentage(home_team_stats, away_team_stats)}
        animationDirection="right"
      ></PossessionItem>
      <PossessionItem
        color={away_team.team_first_color}
        percentage={getPercentage(away_team_stats, home_team_stats)}
      ></PossessionItem>
    </Fragment>
  );
};

const Possession = ({ matchStatistics, allStatistics }) => {
  const home_team = matchStatistics.match.home_team;
  const away_team = matchStatistics.match.away_team;

  const home_team_stats = allStatistics.find(
    (possession) => possession.team_id === home_team.team_id
  );

  const away_team_stats = allStatistics.find(
    (possession) => possession.team_id === away_team.team_id
  );

  return (
    <div className="pb-4 pt-2">
      <div className="w-full text-center font-bold pb-2 text-lg">
        Possession
      </div>
      <div className="flex">
        {getPossession(home_team, away_team, home_team_stats, away_team_stats)}
      </div>
    </div>
  );
};

export { Possession };
