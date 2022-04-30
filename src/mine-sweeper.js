const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultArr = [];
  for (let i = 0; i < matrix.length; i++) {
    resultArr.push([0, 0, 0])
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const neighbors = [];
      if (i === 0) {
        if (j === 0) {
          const elBottom = matrix[i+1][j];
          const elRight = row[j+1];
          const elBottomRight = matrix[i+1][j+1];
          neighbors.push(elBottom, elRight, elBottomRight);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        } else if (j === row.length - 1) {
          const elBottom = matrix[i+1][j];
          const elLeft = row[j-1];
          const elBottomLeft = matrix[i+1][j-1];
          neighbors.push(elBottom, elLeft, elBottomLeft);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        } else {
          const elBottom = matrix[i+1][j];
          const elRight = row[j+1];
          const elLeft = row[j-1];
          const elBottomLeft = matrix[i+1][j-1];
          const elBottomRight = matrix[i+1][j+1];
          neighbors.push(elBottom, elRight, elLeft, elBottomLeft, elBottomRight);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        }
      } else if (i === matrix.length -1) {
        if (j === 0) {
          const elTop = matrix[i-1][j];
          const elRight = row[j+1];
          const elTopRight = matrix[i-1][j+1];
          neighbors.push(elTop, elRight, elTopRight);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        } else if (j === row.length - 1) {
          const elTop = matrix[i-1][j];
          const elLeft = row[j-1];
          const elTopLeft = matrix[i-1][j-1];
          neighbors.push(elTop, elLeft, elTopLeft);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        } else {
          const elTop = matrix[i-1][j];
          const elLeft = row[j-1];
          const elRight = row[j+1];
          const elTopLeft = matrix[i-1][j-1];
          const elTopRight = matrix[i-1][j+1];
          neighbors.push(elTop, elLeft, elRight, elTopLeft, elTopRight);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        }
      } else {
        if (j === 0) {
          const elTop = matrix[i-1][j];
          const elTopRight = matrix[i-1][j+1];
          const elBottom = matrix[i+1][j];
          const elRight = row[j+1];
          const elBottomRight = matrix[i+1][j+1];
          neighbors.push(elBottom, elRight, elBottomRight, elTop, elTopRight);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        } else if (j === row.length - 1) {
          const elTop = matrix[i-1][j];
          const elTopLeft = matrix[i-1][j-1];
          const elBottom = matrix[i+1][j];
          const elLeft = row[j-1];
          const elBottomLeft = matrix[i+1][j-1];
          neighbors.push(elBottom, elLeft, elBottomLeft, elTop, elTopLeft);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        } else {
          const elTop = matrix[i-1][j];
          const elBottom = matrix[i+1][j];
          const elLeft = row[j-1];
          const elRight = row[j+1];
          const elTopLeft = matrix[i-1][j-1];
          const elTopRight = matrix[i-1][j+1];
          const elBottomLeft = matrix[i+1][j-1];
          const elBottomRight = matrix[i+1][j+1];
          neighbors.push(elTop, elBottom, elLeft, elRight, elTopLeft, elTopRight, elBottomLeft, elBottomRight);
          neighbors.forEach(el => {
            if (el) {
              resultArr[i][j]++;
            }
          })
        }
      }
    }
  }
  return resultArr;
}

module.exports = {
  minesweeper
};
