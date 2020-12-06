const _matchData = require('./match-data.json');
const _playerData = require('./player-data.json');
const _statData = require('./stat-data.json');
const _teamData = require('./team-data.json');

module.exports = () => {
  return {
    matches: _matchData,
    players: _playerData,
    statistics: _statData,
    teams: _teamData,
  };
};
