const { getArrNumber } = require('./../utils');
const { sockMerchant } = require('./sock_merchant');

test('Test 1', ()=> {
  const test = getArrNumber('10 20 20 10 10 30 50 10 20');
  expect(sockMerchant(9, test)).toBe(3);
});

test('Test 2', ()=> {
  const test = getArrNumber('1 1 1 2 2 3 4 5 4 6 7 6 6 1 7 9 9 12 11');
  expect(sockMerchant(4234, test)).toBe(7);
});
