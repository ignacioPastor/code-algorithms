const sockMerchant = (n, ar) => {
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
};

module.exports = {
  sockMerchant
}
