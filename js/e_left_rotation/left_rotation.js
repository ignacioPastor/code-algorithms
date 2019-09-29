const rotLeft = (a, d) => {
  // just for fun, I'm not considering the restriction d <= a.length
  const r = d > a.length ? d % a.length : d;
  return [...a.slice(r), ...a.slice(0, r)];
};

module.exports = {
  rotLeft
}
