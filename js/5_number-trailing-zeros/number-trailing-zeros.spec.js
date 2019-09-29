const { zeros } = require('./number-trailing-zeros');

test('Test 1', () => {
  expect(zeros(6)).toBe(1);
});

test('Test 2', () => {
  expect(zeros(12)).toBe(2);
});
