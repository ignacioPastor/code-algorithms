function repeatedString(s, n) {
  const CHAR_TO_FIND = 'a';

  const nFindOccOnInput = countLetterOcc(s, CHAR_TO_FIND);
  const nFullInputRepetition = Math.floor(n / s.length);

  const partialSectionInput = s.slice(0, n % s.length);
  const nFindOccOnPartialSection = countLetterOcc(partialSectionInput, CHAR_TO_FIND)

  return (nFullInputRepetition * nFindOccOnInput) + nFindOccOnPartialSection;
}

function countLetterOcc(text, letter) {
  return (text.match(new RegExp(letter, 'gi')) || []).length;
}


// Test section

console.log(repeatedString('aba', 10)) // Expect 7
console.log(repeatedString('a', 1000000000000)) // Expect 1000000000000