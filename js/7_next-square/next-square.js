function findNextSquare(sq) {
  const square = Math.sqrt(sq);
  return Number.isInteger(square) ? Math.pow(square + 1, 2) : -1;
}


// must return 144
console.log(findNextSquare(121));
// must return 676
console.log(findNextSquare(625));
// must return 320356
console.log(findNextSquare(319225));
// must return 15241630849
console.log(findNextSquare(15241383936));
// must return -1
console.log(findNextSquare(155));
// must return -1
console.log(findNextSquare(342786627));