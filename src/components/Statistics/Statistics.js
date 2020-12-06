import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { MatchResult } from '../DataVisualisations/MatchResult';
import { Possession } from '../DataVisualisations/Possession';
import { TeamList } from '../Teams/TeamList';
import Header from './Header';

import { connect, selectDisplayStatistics } from '../../store';
import Player from '../Players';

const mapStateToProps = (state) => ({
  allStatistics: selectDisplayStatistics(state),
});

const getTotals = (data) => {
  return {
    [data[0].match.home_team.team_id]: {
      score: data[0].match.match_home_score,

      max_mins_played: Math.max.apply(
        Math,
        data
          .filter((t) => {
            return t.team_id === t.match.home_team.team_id;
          })
          .map((o) => {
            return o.minutes_played;
          })
      ),
    },
    [data[0].match.away_team.team_id]: {
      score: data[0].match.match_away_score,
      max_mins_played: Math.max.apply(
        Math,
        data
          .filter((t) => {
            return t.team_id === t.match.away_team.team_id;
          })
          .map((o) => {
            return o.minutes_played;
          })
      ),
    },
  };
};

const Statistics = ({ allStatistics, selectedPlayer, playerStatistics }) => {
  const teamTotals = getTotals(allStatistics);

  return (
    <section>
      <Fragment>
        <Header />
        {allStatistics.length > 0 && (
          <main>
            <div className="max-w-7xl mx-auto pb-6 sm:px-6 lg:px-8">
              <div className="px-4 pb-6 sm:px-0">
                <MatchResult match={allStatistics[0].match}></MatchResult>

                <Possession
                  matchStatistics={allStatistics[0]}
                  allStatistics={allStatistics}
                ></Possession>

                <div className="mt-6">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="text-left col-span-2 py-3 bg-gray-100">
                      <TeamList
                        selectedPlayer={selectedPlayer}
                        stats={allStatistics}
                        team={allStatistics[0].match.home_team}
                      ></TeamList>
                    </div>

                    <Player teamTotals={teamTotals}></Player>

                    <div className="text-right col-span-2 py-3 bg-gray-100">
                      <TeamList
                        selectedPlayer={selectedPlayer}
                        stats={allStatistics}
                        team={allStatistics[0].match.away_team}
                      ></TeamList>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
      </Fragment>
    </section>
  );
};

Statistics.propTypes = {
  allStatistics: PropTypes.array,
  selectedPlayer: PropTypes.string,
  playerStatistics: PropTypes.object,
};

export default connect(mapStateToProps)(Statistics);
