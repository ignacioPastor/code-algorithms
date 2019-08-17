const { getBiDimensionalArray } = require('../utils');

function hourglassSum(arr) {
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
}

/**
 * Return the sum of an specific hourGlass defined by the starting index (indexH, indexV)
 */
function calculateHourGlassSum(indexH, indexV, arr) {
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
}


// Testing section

const input0 =
  `1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0`;
const test0 = getBiDimensionalArray(input0, 6);
console.log(hourglassSum(test0));   // Expected 19

const input1 =
  `1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 9 2 -4 -4 0
    0 0 0 -2 0 0
    0 0 -1 -2 -4 0`;
const test1 = getBiDimensionalArray(input1, 6);
console.log(hourglassSum(test1));  // Expected 13

const input2 =
  `-1 -1 0 -9 -2 -2
    -2 -1 -6 -8 -2 -5
    -1 -1 -1 -2 -3 -4
    -1 -9 -2 -4 -4 -5
    -7 -3 -3 -2 -9 -9
    -1 -3 -1 -2 -4 -5`;
const test2 = getBiDimensionalArray(input2, 6);
console.log(hourglassSum(test2));  // Expected -6
