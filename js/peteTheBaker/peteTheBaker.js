function cakes(recipe, available) {
    let amountPies = Infinity;
    let nPieIng;

    Object.keys(recipe).forEach(ingredient => {
        nPieIng = (available[ingredient] || 0) / recipe[ingredient];

        if (nPieIng < amountPies) {
            amountPies = nPieIng;
        }
    });

    return Math.trunc(amountPies);
}

// must return 2
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
// must return 0
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));