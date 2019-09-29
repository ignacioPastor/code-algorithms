const { streetFighterSelection } = require('./street-fighter-choose-character');

const fightersTest = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
];

test('Test 1', () => {
  const movements = ['up', 'left', 'right', 'left', 'left'];
  const result = ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'];
  expect(streetFighterSelection(fightersTest, [0,0], movements)).toEqual(result);
});

test('Test 2', () => {
  const movements = [];
  const result = [];
  expect(streetFighterSelection(fightersTest, [0,0], movements)).toEqual(result);
});

test('Test 3', () => {
  const movements = ['left','left','left','left','left','left','left','left'];
  const result = ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog'];
  expect(streetFighterSelection(fightersTest, [0,0], movements)).toEqual(result);
});

test('Test 4', () => {
  const movements = ['right','right','right','right','right','right','right','right'];
  const result = ['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka'];
  expect(streetFighterSelection(fightersTest, [0,0], movements)).toEqual(result);
});

test('Test 5', () => {
  const movements = ['up','left','down','right','up','left','down','right'];
  const result = ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken'];
  expect(streetFighterSelection(fightersTest, [0,0], movements)).toEqual(result);
});

test('Test 6', () => {
  const movements = ['down','down','down','down'];
  const result = ['Ken', 'Ken', 'Ken', 'Ken'];
  expect(streetFighterSelection(fightersTest, [0,0], movements)).toEqual(result);
});

test('Test 7', () => {
  const movements = ['up','up','up','up'];
  const result = ['Ryu', 'Ryu', 'Ryu', 'Ryu'];
  expect(streetFighterSelection(fightersTest, [0,0], movements)).toEqual(result);
});

