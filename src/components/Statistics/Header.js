import React, { Fragment } from 'react';
import classnames from 'classnames';
import {
  connect,
  selectedTeam,
  clearSelectedPlayer,
  clearSelectedMatch,
  selectedMatch,
} from '../../store';

import { ClearAllLink, Link } from '../Shared';

const mapStateToProps = (state) => ({
  selectedTeam: selectedTeam(state),
  selectedMatch: selectedMatch(state),
});

class StatisticsHeader extends React.Component {
  render() {
    const { selectedMatch, selectedTeam } = this.props;

    return (
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          {selectedMatch !== '' && selectedTeam !== '' && (
            <Fragment>
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                <span
                  className={classnames({
                    'text-red-600':
                      selectedMatch.home_team.team_id === selectedTeam.team_id,
                  })}
                >
                  {selectedMatch.home_team.team_name}
                </span>
                <span className="mx-2 text-sm">vs</span>
                <span
                  className={classnames({
                    'text-red-600':
                      selectedMatch.away_team.team_id === selectedTeam.team_id,
                  })}
                >
                  {selectedMatch.away_team.team_name}
                </span>
              </h1>
              <Link
                linkText="Change Match"
                onClick={() => {
                  clearSelectedMatch();
                  clearSelectedPlayer();
                }}
              ></Link>
            </Fragment>
          )}
          <ClearAllLink />
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps)(StatisticsHeader);
