import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

export const fetchStatistics = async () => {
  return await instance.get(`/statistics`, {
    params: {},
  });
};

export const fetchTeams = async () => {
  return await instance.get(`/teams`, {
    params: {},
  });
};

export const fetchMatches = async () => {
  return await instance.get(`/matches`, {
    params: {},
  });
};

export const fetchPlayers = async () => {
  return await instance.get(`/players`, {
    params: {},
  });
};
