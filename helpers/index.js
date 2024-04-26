require('dotenv').config();

const {
  getWeeklyCommitsForUser,
  getWeeklyDSAPointsForUser,
} = require('../api');

const { MY_CODETRACK_ID } = process.env;

/**
 * Returns the highest number of points and highest
 * number of commits you've earned in the last 16 weeks
 * Returns a 2-element array: [max points, max commits]
 * Note that these can come from two different weeks.
 * @return {number[]}
 */
const getMyMaxWeeklyScores = async () => {
  // get weekly DSA points your user
  const weeklyPoints = await getWeeklyDSAPointsForUser(MY_CODETRACK_ID);

  // get weekly commits for your user
  const weeklyCommits = await getWeeklyCommitsForUser(MY_CODETRACK_ID);

  // find the max number of DSA points
  // HINT: What kind of data structure is weeklyPoints?
  // HINT: How do we access the points for each week?

  // find the max number of commits

  // return [maxPoints, maxCommits]
};

/**
 * Returns the LOWEST number of points and LOWEST
 * number of commits you've earned in the last 16 weeks
 * Returns a 2-element array: [max points, max commits]
 * Note that these can come from two different weeks.
 * @return {number[]}
 */
const getMyMinWeeklyScores = async () => {
  // TODO: complete the function
};

/**
 * Returns the AVERAGE number of points and AVERAGE
 * number of commits you've earned in the last 16 weeks
 * Returns a 2-element array: [max points, max commits]
 * Note that these can come from two different weeks.
 * @return {number[]}
 */
const getMyMeanWeeklyScores = async () => {
  // TODO: complete the function
};

module.exports = {
  getMyMaxWeeklyScores,
  getMyMinWeeklyScores,
  getMyMeanWeeklyScores,
};
