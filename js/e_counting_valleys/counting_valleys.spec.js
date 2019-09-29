const { countingValleys } = require('./counting_valleys');

test('Test 1', () => {
  expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
});

test('Test 2', () => {
  expect(countingValleys(12, 'DDUUDDUDUUUD')).toBe(2);
});