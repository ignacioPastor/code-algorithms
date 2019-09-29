const { getBiDimensionalArray } = require('../utils');

const hourglassSum = arr => {
  let maxSum;

  // Instead assuming that dimension always will be 6, we are ready to handle the array dimension dynamically
  const nHourGlassByDimension = (arr.length - 2);   // number of hourglass for each arr[n] (if dimension == 6 => nHourGlassByDimension == 4)

  for (let i = 0; i < nHourGlassByDimension; i++) {
    for (let j = 0; j < nHourGlassByDimension; j++) {
      const sum = calculateHourGlassSum(i, j, arr);
      if (maxSum === undefined) {
        maxSum = sum;
      } else {
        maxSum = sum > maxSum ? sum : maxSum;
      }
    }
  }
  return maxSum;
};

/**
 * Return the sum of an specific hourGlass defined by the starting index (indexH, indexV)
 */
const calculateHourGlassSum = (indexH, indexV, arr) => {
  SIZE_HOUR_GLASS = 3;
  let result = 0;
  
  for (let i = indexV; i < indexV + SIZE_HOUR_GLASS; i++) {
    for (let j = indexH; j < indexH + SIZE_HOUR_GLASS; j++) {
      if (!(i === indexV + 1 && (j === indexH || j === indexH + 2))) {
        result += arr[i][j]
      }
    }
  }
  return result;
};

module.exports = {
  hourglassSum
}
