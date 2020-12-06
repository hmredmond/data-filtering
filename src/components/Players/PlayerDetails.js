import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactCountryFlag from 'react-country-flag';
import { calculate_age } from '../../utils/helpers';
import { Link } from '../Shared';
import { clearSelectedPlayer, connect, selectedPlayer } from '../../store';

const mapStateToProps = (state) => ({
  selectedPlayer: selectedPlayer(state),
});

const PlayerDetails = ({ selectedPlayer }) => {
  return (
    <section>
      {selectedPlayer !== undefined && selectedPlayer !== '' && (
        <Fragment>
          <h3 className="text-2xl font-bold col-span-3 text-center">
            {selectedPlayer.player_known_name || selectedPlayer.player_name}
            <span className="px-4">
              <ReactCountryFlag
                countryCode={selectedPlayer.country_code}
                svg
                style={{
                  fontSize: '1.5em',
                  lineHeight: '1.5em',
                }}
                aria-label={selectedPlayer.country_name}
              />
            </span>
          </h3>
          <div className="col-span-3 text-center border-0 border-b-2 pb-3 mb-3">
            Age: {calculate_age(selectedPlayer.player_birth_date)}
          </div>
          <div className="absolute top-0 right-0">
            <Link
              linkText={
                <span className="material-icons text-gray-300 hover:text-gray-600">
                  close
                </span>
              }
              onClick={() => clearSelectedPlayer()}
            />
          </div>
        </Fragment>
      )}
    </section>
  );
};

PlayerDetails.propTypes = {
  player: PropTypes.object,
};

export default connect(mapStateToProps)(PlayerDetails);
