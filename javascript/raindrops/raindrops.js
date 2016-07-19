'use strict';
const m = {3: 'Pling', 5: 'Plang', 7: 'Plong'};

module.exports = function() {
  return {
    convert: n => {
      let s = Object.keys(m).reduce((r, k) => {
        if (n % parseInt(k, 10) === 0)
          r += m[k];
        return r;
      }, '');
      return (s) ? s : n.toString();
    }
  };
};
