Array.prototype.sameStructureAs = function (other) {
  return checkLevel(this, other);
};

function checkLevel(obj1, obj2) {
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.reduce((acc, val, index) => acc && checkLevel(val, obj2[index]), true);
  }
  return true;
}

// must return true
console.log([1, 2, 3].sameStructureAs([4, 5, 6]));
// must return false
console.log([1, [2, 3]].sameStructureAs([4, 5, 6]));
// must return true
console.log([1, [2, 3]].sameStructureAs([4, [5, 6]]));
// must return false
console.log([1, [2]].sameStructureAs([4, [5, 6]]));