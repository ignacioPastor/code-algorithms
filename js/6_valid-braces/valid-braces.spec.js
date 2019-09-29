const { validBraces } = require('./valid-braces');

test('Test 1', () => {
  expect(validBraces("()")).toBeTruthy();
});

test('Test 2', () => {
  expect(validBraces("[(])")).toBeFalsy();
});

test('Test 3', () => {
  expect(validBraces("")).toBeTruthy();
});

test('Test 4', () => {
  expect(validBraces("[(])foo")).toBeFalsy();
});
