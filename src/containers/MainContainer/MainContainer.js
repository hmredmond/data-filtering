import React, { Fragment } from 'react';

import Matches from '../../components/Matches/Matches';
import Statistics from '../../components/Statistics/Statistics';

import Filter from '../../components/Filter';
import { Errors } from '../../components/Shared';

import {
  connect,
  loadMatches,
  loadTeams,
  selectTeams,
  loadFullStatistics,
  loadPlayers,
  selectedMatch,
  setSelectedMatch,
  setSelectedPlayer,
  setSelectedTeam,
  selectMatches,
  selectPlayers,
  selectStatistics,
  selectedTeam,
} from '../../store';

const mapStateToProps = (state) => ({
  teams: selectTeams(state),
  matches: selectMatches(state),
  players: selectPlayers(state),
  statistics: selectStatistics(state),
  selectedMatch: selectedMatch(state),
  selectedTeam: selectedTeam(state),
});

class MainContainer extends React.Component {
  async componentDidMount() {
      await loadTeams();
      await loadMatches();
      await loadPlayers();
      await loadFullStatistics();
   
    const ls_filter = localStorage.getItem(
      process.env.REACT_APP_LOCAL_STORAGE_KEY
    );

    if (ls_filter && Object.entries(ls_filter).length > 2) {
      const dataSaved = JSON.parse(ls_filter);

      if (!this.props.teams.error) setSelectedTeam(dataSaved.team_id);
      if (!this.props.players.error) setSelectedPlayer(dataSaved.player_id);
      if (!this.props.matches.error) setSelectedMatch(dataSaved.match_id);
    }
    //  }
  }

  render() {
    const {
      teams,
      players,
      statistics,
      matches,
      selectedTeam,
      selectedMatch,
    } = this.props;

    return (
      <Fragment>
        {teams.error || matches.error || statistics.error || players.error ? (
          <Errors
            teamError={teams.error}
            matchError={matches.error}
            statisticsError={statistics.error}
            playerError={players.error}
          ></Errors>
        ) : (
          <Fragment>
            {selectedTeam === '' && <Filter> </Filter>}
            {selectedMatch === undefined && selectedTeam !== '' && (
              <Matches></Matches>
            )}
            {selectedMatch !== undefined && selectedTeam !== '' && (
              <Statistics></Statistics>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(MainContainer);
