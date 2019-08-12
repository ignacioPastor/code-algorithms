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

module.exports = {
  getArrNumber
}
