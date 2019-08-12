const { getArrNumber } = require('./../utils');

function sockMerchant(n, ar) {
  const occurrences = [...new Set(ar)];
  const countPairsMap = {};
  ar.forEach(val => {
      if (occurrences.indexOf(val) > -1) {
          countPairsMap[val] = (countPairsMap[val] || 0) + 1
      }
  });
  return Object.values(countPairsMap).reduce((acc, val) => {
      return acc + Math.floor(val / 2);
  }, 0);

}


// Testing section

const test0 = getArrNumber('10 20 20 10 10 30 50 10 20');
console.log(sockMerchant(9, test0)); // Expected 3

const test1 = getArrNumber('1 1 1 2 2 3 4 5 4 6 7 6 6 1 7 9 9 12 11');
console.log(sockMerchant(4234, test1)); // Expected 7
