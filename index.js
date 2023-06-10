const {
  getMyMaxWeeklyScores,
  getMyMinWeeklyScores,
  getMyMeanWeeklyScores,
} = require('./helpers');

const main = async () => {
  console.log('analyzing my Codetrack points...');

  const [maxDSAPoints, maxCommits] = await getMyMaxWeeklyScores();
  const [minDSAPoints, minCommits] = await getMyMinWeeklyScores();
  const [meanDSAPoints, meanCommits] = await getMyMeanWeeklyScores();

  console.log('==== Weekly DSA Points =====');
  console.log(`min: ${minDSAPoints}`);
  console.log(`max: ${maxDSAPoints}`);
  console.log(`avg: ${meanDSAPoints}`);

  console.log('==== Weekly Commits =====');
  console.log(`min: ${minCommits}`);
  console.log(`max: ${maxCommits}`);
  console.log(`avg: ${meanCommits}`);
};

// Run the main function
main();
