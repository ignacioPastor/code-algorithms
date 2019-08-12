function jumpingOnClouds(c) {
  let nJumps = 0;
  let index = 2;
  while (index <= c.length -1) {
      nJumps++;
      if (c[index] === 0) {
          index += 2;
      } else {
          index += 1;
      }
  }
  if (index === c.length) {
    return nJumps + 1;
  }
  return nJumps;
}


const test0 = getArrNumber('0 0 1 0 0 1 0');
console.log(jumpingOnClouds(test0)); // Expected 4

const test1 = getArrNumber('0 0 0 1 0 0');
console.log(jumpingOnClouds(test1)); // Expected 3

const test2 = getArrNumber('0 0 1 0 0 0 0 1 0 0');
console.log(jumpingOnClouds(test2)); // Expected 6

const test4 = getArrNumber('0 1 0 0 0 0 0 1 0 1 0 0 0 1 0 0 1 0 1 0 0 0 0 1 0 0 1 0 0 1 0 1 0 1 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 0 0 1 0 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 0 1 0 1 0 1 0 1 0 0 0 0 0 0 1 0 0 0');
console.log(jumpingOnClouds(test4)); //Expected 53

const test8 = getArrNumber('0 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0 0 0 1 0 1 0 1 0 0 1 0 1 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 1 0 1 0');
console.log(jumpingOnClouds(test8)); // Expected 46


function getArrNumber(str) {
  return str.split(' ').map(n => parseInt(n));
}