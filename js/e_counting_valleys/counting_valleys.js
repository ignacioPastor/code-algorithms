function countingValleys(n, s) {
  let nValleys = 0;
  [...s].reduce((previousElevation, step) => {
      const currentElevation = previousElevation + (step === 'D' ? -1 : 1);
      if (previousElevation === 0 && currentElevation === -1) {
          ++nValleys;
      }
      return currentElevation;
  }, 0);
  return nValleys;
}


// Testing section

console.log(countingValleys(8, 'UDDDUDUU')); // Expected 1
console.log(countingValleys(12, 'DDUUDDUDUUUD')); // Expected 2