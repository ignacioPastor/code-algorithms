const { getArrNumber } = require('./../utils');
const { jumpingOnClouds } = require('./jumping_on_the_clouds');

test('Simple end', () => {
  const arrInput = getArrNumber('0 0 1 0 0 1 0');
  expect(jumpingOnClouds(arrInput)).toEqual(4);
});

test('End two spaces', () => {
  const arrInput = getArrNumber('0 0 0 1 0 0');
  expect(jumpingOnClouds(arrInput)).toEqual(3);
});

test('End two spaces', () => {
  const arrInput = getArrNumber('0 0 1 0 0 0 0 1 0 0');
  expect(jumpingOnClouds(arrInput)).toEqual(6);
});

test('Long case', () => {
  const arrInput = getArrNumber('0 1 0 0 0 0 0 1 0 1 0 0 0 1 0 0 1 0 1 0 0 0 0 1 0 0 1 0 0 1 0 1 0 1 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 0 0 1 0 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 0 0 0 0 0 1 0 0 0');
  expect(jumpingOnClouds(arrInput)).toEqual(53);
});

test('Long case', () => {
  const arrInput = getArrNumber('0 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0 0 0 1 0 1 0 1 0 0 1 0 1 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 1 0 1 0');
  expect(jumpingOnClouds(arrInput)).toEqual(46);
});

