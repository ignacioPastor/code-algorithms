Array.prototype.sameStructureAs = function (other) {
  return checkLevel(this, other);
};

function checkLevel(obj1, obj2) {
  const isArr1 = Array.isArray(obj1);
  const isArr2 = Array.isArray(obj2);
  if (isArr1 !== isArr2) {
    return false;
  }

  if (isArr1) {
    if (obj1.length !== obj2.length) return false;

    return obj1.reduce((acc, val, index) => {
      const myRes = checkLevel(val, obj2[index]);
      return acc && myRes;
    }, true);
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