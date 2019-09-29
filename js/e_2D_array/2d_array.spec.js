const { getBiDimensionalArray } = require('../utils');
const { hourglassSum } = require('./2d_array');

test('Test 1', () => {
  const input =
    `1 1 1 0 0 0
      0 1 0 0 0 0
      1 1 1 0 0 0
      0 0 2 4 4 0
      0 0 0 2 0 0
      0 0 1 2 4 0`;
  const arr = getBiDimensionalArray(input, 6);
  expect(hourglassSum(arr)).toBe(19);
});

test('Test 2', () => {
  const input =
    `1 1 1 0 0 0
      0 1 0 0 0 0
      1 1 1 0 0 0
      0 9 2 -4 -4 0
      0 0 0 -2 0 0
      0 0 -1 -2 -4 0`;
  const arr = getBiDimensionalArray(input, 6);
  expect(hourglassSum(arr)).toBe(13);
});

test('Test 3', () => {
  const input =
    `-1 -1 0 -9 -2 -2
      -2 -1 -6 -8 -2 -5
      -1 -1 -1 -2 -3 -4
      -1 -9 -2 -4 -4 -5
      -7 -3 -3 -2 -9 -9
      -1 -3 -1 -2 -4 -5`;
  const arr = getBiDimensionalArray(input, 6);
  expect(hourglassSum(arr)).toBe(-6);
});
