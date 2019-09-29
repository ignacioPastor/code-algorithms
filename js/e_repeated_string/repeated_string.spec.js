const { repeatedString } = require('./repeated_string');

test('Test 1', () => {
  expect(repeatedString('aba', 10)).toBe(7);
});

test('Test 2', () => {
  expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
});