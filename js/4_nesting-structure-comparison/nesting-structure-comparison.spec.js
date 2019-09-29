const { checkLevel } = require('./nesting-structure-comparison');

Array.prototype.sameStructureAs = function (other) {
  return checkLevel(this, other);
};

test('Test 1', () => {
  expect([1, 2, 3].sameStructureAs([4, 5, 6])).toBeTruthy();
});

test('Test 2', () => {
  expect([1, [2, 3]].sameStructureAs([4, 5, 6])).toBeFalsy();
});

test('Test 3', () => {
  expect([1, [2, 3]].sameStructureAs([4, [5, 6]])).toBeTruthy();
});

test('Test 4', () => {
  expect([1, [2]].sameStructureAs([4, [5, 6]])).toBeFalsy();
});
