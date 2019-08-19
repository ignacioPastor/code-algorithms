const { getArrNumber } = require('./../utils');

function rotLeft(a, d) {
  // just for fun, I'm not considering the restriction d <= a.length
  const r = d > a.length ? d % a.length : d;
  return [...a.slice(r), ...a.slice(0, r)];
}


// Testing section

const test0 = getArrNumber('1 2 3 4 5');
console.log(rotLeft(test0, 4)); // Expected [5 1 2 3 4]

const test1 = getArrNumber('41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51');
console.log(rotLeft(test1, 10)); // Expected 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77

const test2 = getArrNumber('1 2 3 4 5');
console.log(rotLeft(test2, 14)); // Expected 5 1 2 3 4
