const streetFighterSelection = (fighters, position, moves) => {
  return moves.reduce((acc, val) => 
    manageMovement(val, fighters, acc.position, acc.breadcrumb), { position, breadcrumb: []})
  .breadcrumb;
};

const manageMovement = (typeMovement, fighters, position, breadcrumb) => {
  switch (typeMovement) {
    case "up": return makeMovement([-1, 0], fighters, position, breadcrumb);
    case "down": return makeMovement([1, 0], fighters, position, breadcrumb);
    case "left": return makeMovement([0, -1], fighters, position, breadcrumb);
    case "right": return makeMovement([0, 1], fighters, position, breadcrumb);
  }
};

const makeMovement = (movement, fighters, position, breadcrumb) => {
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
};

module.exports = {
  streetFighterSelection
}
