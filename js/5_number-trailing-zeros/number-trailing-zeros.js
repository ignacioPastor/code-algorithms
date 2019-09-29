const zeros = n => {
  let res = 0;
  for (let i = 5; i < n; i *= 5)
    res += Math.trunc(n / i);
  return res;
};

module.exports = {
  zeros
}
