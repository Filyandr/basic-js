const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  const k = 0.693;
    if(typeof str === "string") {
      str = Number(str);
      if(str > 0 && str < MODERN_ACTIVITY) {
  let t = Math.ceil(Math.log((MODERN_ACTIVITY/str))/(Math.log(2)/HALF_LIFE_PERIOD));
  return t;
      } else {
        return false;
      }} else {
        return false;
      }}

module.exports = {
  dateSample
};
