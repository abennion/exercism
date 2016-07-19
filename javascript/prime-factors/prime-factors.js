'use strict';
exports.for = x => {
  // avoiding recursion
  let factors = [];
  let d = 2;
  while (x > 1) {
    if (x % d === 0) {
      x /= d;
      factors.push(d);
    } else {
      d += 1;
    }
  }
  return factors;
};
