function validBraces(braces) {
  let pairs = ['()', '[]', '{}'];
  let mod;

  do {
    mod = false;
    pairs.forEach(pair => {
      if (braces.indexOf(pair) > -1) {
        braces = braces.replace(pair, '');
        mod = true;
      }
    });
  } while (mod === true);

  return braces === '';
}

console.log(validBraces("()"));
console.log(validBraces("[(])"));
