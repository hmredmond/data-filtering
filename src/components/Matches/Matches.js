import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Match from './Match';
import {
  connect,
  selectDisplayMatchesByTeam,
  setSelectedMatch,
} from '../../store';

import Header from './Header';

const mapStateToProps = (state) => ({
  matches: selectDisplayMatchesByTeam(state),
});

class Matches extends Component {
  render() {
    const { matches } = this.props;
    return (
      <section className="matches">
        <Fragment>
          <Header />
          <div className="flex flex-row justify-center max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div>
              {matches.map((match, index) => {
                return (
                  <Match
                    match={match}
                    viewMatch={setSelectedMatch}
                    key={`match-filter-${index}`}
                  ></Match>
                );
              })}
            </div>
          </div>
        </Fragment>
      </section>
    );
  }
}

Matches.propTypes = {
  matches: PropTypes.array,
};

export default connect(mapStateToProps)(Matches);
