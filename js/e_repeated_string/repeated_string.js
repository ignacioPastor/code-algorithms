const repeatedString = (s, n) => {
  const CHAR_TO_FIND = 'a';

  const nFindOccOnInput = countLetterOcc(s, CHAR_TO_FIND);
  const nFullInputRepetition = Math.floor(n / s.length);

  const partialSectionInput = s.slice(0, n % s.length);
  const nFindOccOnPartialSection = countLetterOcc(partialSectionInput, CHAR_TO_FIND)

  return (nFullInputRepetition * nFindOccOnInput) + nFindOccOnPartialSection;
};

const countLetterOcc = (text, letter) => {
  return (text.match(new RegExp(letter, 'gi')) || []).length;
};

module.exports = {
  repeatedString
}
