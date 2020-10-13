const checkWord = require('check-word');

const wordList = checkWord('en'); // Sorry everyone else

module.exports = async (planets, callback) => planets.filter((planet, index) => {
  const passes = planet
      .replace('~', '')
      .split('-')
      .filter(part => wordList.check(part)).length;
  if(passes) {
    callback(planet);
    found++;
  }
  progress.update(index, { found });
  return passes;
});