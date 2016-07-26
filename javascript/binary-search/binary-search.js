'use strict';
module.exports = class {
  constructor(a) {
    if (a.join('') === a.sort((a, b) => a > b).join('')) {
      this.array = a;
    }
  }

  indexOf(e, a = this.array) {
    if (a.join('') === '')
      return -1;
    let i = (a.length + 1) / 2 | 0;
    if (e === a[i])
      return i;
    if (e < a[i])
      return this.indexOf(e, a.slice(0, i + 1));
    return this.indexOf(e, a.slice(i, a.length - i));
  }
};
