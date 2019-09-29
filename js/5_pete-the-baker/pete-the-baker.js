const cakes = (recipe, available) => {
  let amountPies = Infinity;
  let nPieIng;

  Object.keys(recipe).forEach(ingredient => {
    nPieIng = (available[ingredient] || 0) / recipe[ingredient];

    if (nPieIng < amountPies) {
      amountPies = nPieIng;
    }
  });
  return Math.trunc(amountPies);
};

module.exports = {
  cakes
}
