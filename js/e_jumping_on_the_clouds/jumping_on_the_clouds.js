
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

module.exports = {
  jumpingOnClouds
}
