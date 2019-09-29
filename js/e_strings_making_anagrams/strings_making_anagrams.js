const makeAnagram = (a, b) => {
  const shorter = a.length > b.length ? b : a;
  const { first, second } = shorter.split('').reduce((state, val) => {
    if (state.second.indexOf(val) > -1) {
      return {
        first: state.first.replace(val, ''),
        second: state.second.replace(val, '')
      }
    }
    return state;
  }, { first: a, second: b });
  return first.length + second.length;
};

module.exports = {
  makeAnagram
}
