const { cakes } = require('./pete-the-baker');

test('Test 1', () => {
  const recipe = { flour: 500, sugar: 200, eggs: 1 };
  const ingredients = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
  expect(cakes(recipe, ingredients)).toBe(2);
});

test('Test 2', () => {
  const recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
  const ingredients = { sugar: 500, flour: 2000, milk: 2000 };
  expect(cakes(recipe, ingredients)).toBe(0);
});