const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
let whatDate = new Date(2019, 11, 22, 23, 45, 11, 500);
let date = new Date();
function getSeason(obj) {
  if(typeof obj === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if (Object.getOwnPropertyNames(obj).length !== 0) {
    throw new Error("Invalid date!");
  }
  if (Object.prototype.toString.call(obj) !== "[object Date]") {
    throw new Error("Invalid date!");
  }
  if(Object.prototype.toString.call(obj) === "[object Date]") {
    if(obj.getMonth() > 1 && obj.getMonth() < 5) {
      return 'spring';
    } else if (obj.getMonth() > 4 && obj.getMonth() < 8) {
      return 'summer';
    } else if (obj.getMonth() > 7 && obj.getMonth() < 11) {
      return 'autumn';
    } else if (obj.getMonth() < 2 || obj.getMonth() === 11) {
      return 'winter';
    }
  }
  if (typeof obj === 'string') {
    if (obj.toLowerCase() === 'autumn' || obj.toLowerCase() === 'winter' || obj.toLowerCase() === 'summer' || obj.toLowerCase() === 'spring') {
      return obj.toLowerCase();
    } else {
      throw new Error("Invalid date!");
    }
  }
}


module.exports = {
  getSeason
};
