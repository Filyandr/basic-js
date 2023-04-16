const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let disNext = '--discard-next';
  let disPrev = '--discard-prev';
  let doubNext = '--double-next';
  let doubPrev = '--double-prev';
  let result = [];
  if(!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  if(arr.length === 0) {
    return result;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] == disNext) {
      continue;
    } else if (arr[i] == disPrev && arr[i-2] !== disNext) {
      result.pop();
    } else if (arr[i - 1] == doubNext) {
      result.push(arr[i]);
      result.push(arr[i]);
    } else if (arr[i] == doubPrev && arr[i - 2] !== disNext) {
      if (i == 0) {
        continue;
      } else {
        result.push(arr[i - 1]);
      }
    } else if (arr[i] !== disNext && arr[i] !== disPrev && arr[i] !== doubNext && arr[i] !== doubPrev) {
      result.push(arr[i]);
    }
  } return result;
}

module.exports = {
  transform
};
