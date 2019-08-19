const { rotLeft } = require('./left_rotation');
const { getArrNumber } = require('./../utils');

test('Basic case', () => {
  const arrInput = getArrNumber('1 2 3 4 5');
  expect(rotLeft(arrInput, 4)).toEqual([5, 1, 2, 3, 4]);
});

test('Long case', () => {
  const arrInput = getArrNumber('41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51');
  const expectedResult = getArrNumber('77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77');
  expect(rotLeft(arrInput, 10)).toEqual(expectedResult);
});

test('Rotations bigger than array length', () => {
  const arrInput = getArrNumber('1 2 3 4 5');
  const expectedResult = getArrNumber('5 1 2 3 4');
  expect(rotLeft(arrInput, 14)).toEqual(expectedResult);
});
