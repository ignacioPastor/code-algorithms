const mix = (s1, s2) => {
  const data1 = cleanData(s1);
  const data2 = cleanData(s2);

  const stringResult = generateResult(data1, data2);
  const sortedResult = stringResult.split('/').sort((a, b) => customSort(a, b)).join('/');
  return sortedResult;
};

/** Sort by letters length, then by string number, and as last case, by letter alphabetical */
const customSort = (a, b) => {
  const arrA = a.split(':');
  const arrB = b.split(':');
  if (arrA[1].length !== arrB[1].length) {
    return arrA[1].length > arrB[1].length ? -1 : 1;
  } else if (arrA[0] !== arrB[0]) {
    return arrA[0] > arrB[0] ? 1 : -1;
  }
  return arrA[1][0] > arrB[1][0] ? 1 : -1;
};

/** Configure the result string */
const generateResult = (d1, d2) => {

  // get all the different keys
  const occurrences = Array.from([...new Set([...Object.keys(d1), ...Object.keys(d2)])])

  let res = '';
  occurrences.forEach(letter => {
    if(d1[letter] && d2[letter]) {
      if (d1[letter] === d2[letter]) {
        res += `=:${getNOcc(letter, d1[letter])}`;
      } else if (d1[letter] > d2[letter]) {
        res += `1:${getNOcc(letter, d1[letter])}`;
      } else {
        res += `2:${getNOcc(letter, d2[letter])}`;
      }
    } else if (d1[letter]) {
      res += `1:${getNOcc(letter, d1[letter])}`;
    } else {
      res += `2:${getNOcc(letter, d2[letter])}`;
    }
    res += '/';
  });
  return res.substring(0, res.length - 1);  // remove the last '/'
};

/** Return n times the received letter */
const getNOcc = (letter, n) => {
  let resp = '';
  while (n >= 1) {
    resp += letter;
    n--;
  }
  return resp;
};

/**
 * Filter just lower letter
 * Count each letter in an object { a: 4, b: 3 }
 * Filter occurrences > 1
 * @param text, string to clean
 */
const cleanData = text => {
  const lowArr = text.split('').filter(letter => /[a-z]/.test(letter));

  const myMap = lowArr.reduce((acc, val) => {
    const newFilter = Object.assign({}, acc);
    newFilter[val] = newFilter[val] ? newFilter[val] + 1 : 1;
    return newFilter;
  }, {});

  const significantOccur = Object.keys(myMap).reduce((acc, val) => {
    const resp  = { ...acc};
    if (myMap[val] > 1) resp[val] = myMap[val];
    return resp;
  }, {});

  return significantOccur;
};

module.exports = {
  mix
}
