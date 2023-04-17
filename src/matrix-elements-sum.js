const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(mat) {
  let result = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if(mat[i][j] !== 0) {
        result += mat[i][j];
      }
      if(mat[i][j] == 0 && mat[i+1] !== undefined ) {
        result = result - mat[i+1][j];
      }
    }
  } return result;
}

module.exports = {
  getMatrixElementsSum
};
