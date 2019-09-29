const countingValleys = (n, s) => {
  let nValleys = 0;
  [...s].reduce((previousElevation, step) => {
      const currentElevation = previousElevation + (step === 'D' ? -1 : 1);
      if (previousElevation === 0 && currentElevation === -1) {
          ++nValleys;
      }
      return currentElevation;
  }, 0);
  return nValleys;
};

module.exports = {
  countingValleys
}
