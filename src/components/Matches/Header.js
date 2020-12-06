import React, { Fragment } from 'react';
import {
  connect,
  selectedTeam,
  clearSelectedTeam,
  clearSelectedPlayer,
  clearSelectedMatch,
} from '../../store';
import { clearAllLocalStorage } from '../../utils/helpers';
import { ClearAllLink, Link } from '../Shared';

const mapStateToProps = (state) => ({
  selectedTeam: selectedTeam(state),
});

class Header extends React.Component {
  render() {
    const { selectedTeam } = this.props;

    return (
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          {selectedTeam !== '' && (
            <Fragment>
              <h1 className="text-3xl font-bold leading-tight text-red-600 ">
                <span className="text-gray-900">Matches played by: </span>
                {selectedTeam.team_name}
              </h1>
              <Link
                linkText="Choose new team"
                onClick={() => {
                  clearSelectedTeam();
                  clearSelectedMatch();
                  clearSelectedPlayer();
                  clearAllLocalStorage();
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

export default connect(mapStateToProps)(Header);
