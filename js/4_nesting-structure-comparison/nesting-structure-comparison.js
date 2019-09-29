const checkLevel = (obj1, obj2) => {
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.reduce((acc, val, index) => acc && checkLevel(val, obj2[index]), true);
  }
  return true;
}

module.exports = {
  checkLevel
}
