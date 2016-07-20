'use strict';
module.exports = function(s) {
  return {
    toDecimal: () => {
      if (/[^012]/.test(s))
        return 0;
      return [...s].reverse().reduce((r, e, i) => r + (e * Math.pow(3, i)), 0);
    }
  };
};
