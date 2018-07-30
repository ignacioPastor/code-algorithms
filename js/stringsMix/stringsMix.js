


function mix(s1, s2) {
  
  const data1 = cleanData(s1);
  const data2 = cleanData(s2);

  return generateResult(data1, data2);

}

function generateResult(d1, d2) {
  const occurrences = [...new Set([...Object.keys(d1), ...Object.keys(d2)])];
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
      res += `2:${getNOcc(letter, d1[letter])}`;
    }
    res += '/';
  });

  return res.substring(0, res.length - 2);
}
console.log(mix('aa bbb', 'aa c'));//?


function getNOcc(letter, n) {
  let resp = '';
  while (n >= 1) {
    resp += letter;
    n--;
  }
  return resp;
}
console.log(getNOcc('a', 3));

function cleanData(text) {

  // filter just lower letter
  const lowArr = text.split('').filter(letter => /[a-z]/.test(letter));

  // count each letter in a object { a: 4, b: 2 }
  const myMap = lowArr.reduce((acc, val) => {
    const newFilter = { ...acc };
    newFilter[val] = newFilter[val] ? newFilter[val] + 1 : 1;
    return newFilter;
  }, {});
  console.log(myMap);

  // filter occurrences > 1
  const significantOccur = Object.keys(myMap).reduce((acc, val) => {
    const resp  = { ...acc };
    if (myMap[val] > 1) resp[val] = myMap[val];
    return resp;
  }, {});

  return significantOccur;
};






// Test.describe("Mix",function() {
//   Test.it("Basic tests",function() {    
//       Test.assertEquals(mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr")
//       Test.assertEquals(mix("looping is fun but dangerous", "less dangerous than coding"), "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
//       Test.assertEquals(mix(" In many languages", " there's a pair of functions"), "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
//       Test.assertEquals(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo")
//       Test.assertEquals(mix("codewars", "codewars"), "")
//       Test.assertEquals(mix("A generation must confront the looming ", "codewarrs"), "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")
//   })})