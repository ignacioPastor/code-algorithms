const { mix } = require('./strings-mix');

test('Test 1', () => {
  expect(mix("Are they here", "yes, they are here")).toBe('2:eeeee/2:yy/=:hh/=:rr');
});

test('Test 2', () => {
  expect(mix("looping is fun but dangerous", "less dangerous than coding")).toBe('1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg');
});

test('Test 3', () => {
  expect(mix(" In many languages", " there's a pair of functions")).toBe('1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt');
});

test('Test 4', () => {
  expect(mix("Lords of the Fallen", "gamekult")).toBe('1:ee/1:ll/1:oo');
});

test('Test 5', () => {
  expect(mix("codewars", "codewars")).toBe('');
});

test('Test 6', () => {
  expect(mix("A generation must confront the looming ", "codewarrs")).toBe('1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr');
});
