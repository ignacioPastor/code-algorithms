function mix(s1, s2) {
  const data1 = cleanData(s1);
  const data2 = cleanData(s2);

  const stringResult = generateResult(data1, data2);
  const sortedResult = stringResult.split('/').sort((a, b) => customSort(a, b)).join('/');
  return sortedResult;
}

/** Sort by letters length, then by string number, and as last case, by letter alphabetical */
function customSort(a, b) {
  const arrA = a.split(':');
  const arrB = b.split(':');
  if (arrA[1].length !== arrB[1].length) {
    return arrA[1].length > arrB[1].length ? -1 : 1;
  } else if (arrA[0] !== arrB[0]) {
    return arrA[0] > arrB[0] ? 1 : -1;
  }
  return arrA[1][0] > arrB[1][0] ? 1 : -1;
}

function generateResult(d1, d2) {
  const concatKeys = Object.keys(d1).concat(Object.keys(d2));
  const mySet = new Set(concatKeys);
  const occurrences = Array.from(mySet);

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
  return res.substring(0, res.length - 1);
}

/** Return n times the received letter */
function getNOcc(letter, n) {
  let resp = '';
  while (n >= 1) {
    resp += letter;
    n--;
  }
  return resp;
}

/**
 * Filter just lower letter
 * Count each letter in an object { a: 4, b: 3 }
 * Filter occurrences > 1
 * @param text, string to clean
 */
function cleanData(text) {
  const lowArr = text.split('').filter(letter => /[a-z]/.test(letter));

  const myMap = lowArr.reduce((acc, val) => {
    const newFilter = Object.assign({}, acc);
    newFilter[val] = newFilter[val] ? newFilter[val] + 1 : 1;
    return newFilter;
  }, {});

  const significantOccur = Object.keys(myMap).reduce((acc, val) => {
    const resp  = Object.assign({}, acc);
    if (myMap[val] > 1) resp[val] = myMap[val];
    return resp;
  }, {});

  return significantOccur;
};


// // Test

// 2:eeeee/2:yy/=:hh/=:rr
console.log(mix("Are they here", "yes, they are here"));


// 1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg
console.log(mix("looping is fun but dangerous", "less dangerous than coding"));

// 1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt
console.log(mix(" In many languages", " there's a pair of functions"));

// 1:ee/1:ll/1:oo
console.log(mix("Lords of the Fallen", "gamekult"));

// 
console.log(mix("codewars", "codewars"));

// 1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr
console.log(mix("A generation must confront the looming ", "codewarrs"));
