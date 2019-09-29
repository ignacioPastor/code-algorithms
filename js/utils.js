/**
 * This file will store the handy functions *just* for testing purposes.
 * This is not a library to be used on the solution of the algorithms
 */


/**
 * Convert to an array of numbers an string of numbers separated by spaces
 * @param {*} str string of numbers separated by spaces
 * @return array of numbers
 */
function getArrNumber(str) {
  return str.split(' ').map(n => parseInt(n));
}

/**
 * Given a bidimensional array as string, return it as bidimensional array of numbers
 * Because of practicity, it is designed to work on the following way:
 * 
 * ie:
 * const arr = `
 *   -1 -1 0 -9 -2 -2
 *   -2 -1 -6 -8 -2 -5
 *   -1 -1 -1 -2 -3 -4
 *   -1 -9 -2 -4 -4 -5
 *   -7 -3 -3 -2 -9 -9
 *   -1 -3 -1 -2 -4 -5
 *   `;
 * getBiDimensionalArray(arr, 6)
 * 
 * @param {*} text array as string to convert
 * @param {*} length of each array
 */
function getBiDimensionalArray(text, length) {
  const elements = text.replace(/\r?\n|\r/g, ' ')
    .split(' ')
    .filter(p => p !== '');

  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(elements.slice(i * length, i * length + length).join(' '));
  }
  return arr.map(a => getArrNumber(a))
}

module.exports = {
  getArrNumber,
  getBiDimensionalArray
}
