require('dotenv').config();

DEFAULT_LOOKBACK_PERIOD = 16;

const API_URL = process.env.API_URL;

const getWeeklyDSAPointsForUser = async (
  userId,
  limit = DEFAULT_LOOKBACK_PERIOD
) => {
  const res = await fetch(`${API_URL}/weeklyScores/${userId}?limit=${limit}`);
  const weeklyPoints = await res.json();

  return weeklyPoints;
};

const getWeeklyCommitsForUser = async (
  userId,
  limit = DEFAULT_LOOKBACK_PERIOD
) => {
  const res = await fetch(`${API_URL}/weeklyCommits/${userId}?limit=${limit}`);
  const weeklyCommits = await res.json();

  return weeklyCommits;
};

module.exports = {
  getWeeklyDSAPointsForUser,
  getWeeklyCommitsForUser,
};
