function streetFighterSelection(fighters, position, moves) {
  return moves.reduce((acc, val) => 
    manageMovement(val, fighters, acc.position, acc.breadcrumb), { position, breadcrumb: []})
  .breadcrumb;
}

function manageMovement(typeMovement, fighters, position, breadcrumb) {
  switch (typeMovement) {
    case "up": return makeMovement([-1, 0], fighters, position, breadcrumb);
    case "down": return makeMovement([1, 0], fighters, position, breadcrumb);
    case "left": return makeMovement([0, -1], fighters, position, breadcrumb);
    case "right": return makeMovement([0, 1], fighters, position, breadcrumb);
  }

}
function makeMovement(movement, fighters, position, breadcrumb) {
  const movVertical = position[0] + movement[0];

  // Handle vertical limits
  if (movVertical > -1 && movVertical < 2) {

    // Make horizontal movement
    let movHorizontal = position[1] + movement[1];

    // check if circular movement by left or right
    movHorizontal = movHorizontal < 0 ? fighters[movVertical].length - 1 :
      movHorizontal >= fighters[movVertical].length ? 0 : movHorizontal;

      return {
      position: [movVertical, movHorizontal],
      breadcrumb: breadcrumb.concat(fighters[movVertical][movHorizontal])
      };
  }
  return { position, breadcrumb: breadcrumb.concat(fighters[position[0]][position[1]]) };
}

// Tests

fightersTest = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

// must return ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
const moves1 = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fightersTest, [0,0], moves1));

// must return []
const moves2 = [];
console.log(streetFighterSelection(fightersTest, [0,0], moves2));

// must return ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']
const moves3 = ["left","left","left","left","left","left","left","left"];
console.log(streetFighterSelection(fightersTest, [0,0], moves3));

// must return ['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']
const moves4 = ["right","right","right","right","right","right","right","right"];
console.log(streetFighterSelection(fightersTest, [0,0], moves4));

// must return ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']
moves5 = ["up","left","down","right","up","left","down","right"];
console.log(streetFighterSelection(fightersTest, [0,0], moves5));

// must return ['Ken', 'Ken', 'Ken', 'Ken']
moves6 = ["down","down","down","down"];
console.log(streetFighterSelection(fightersTest, [0,0], moves6));

// must ['Ryu', 'Ryu', 'Ryu', 'Ryu']
moves7 = ["up","up","up","up"];
console.log(streetFighterSelection(fightersTest, [0,0], moves7));