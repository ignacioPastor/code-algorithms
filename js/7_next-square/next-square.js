const findNextSquare = sq => {
  const square = Math.sqrt(sq);
  return Number.isInteger(square) ? Math.pow(square + 1, 2) : -1;
}

module.exports = {
  findNextSquare
}
