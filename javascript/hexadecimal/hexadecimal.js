'use strict';
module.exports = class {
  constructor(h) {
    this.h = String(h);
  }

  hexToDecimal(h) {
    h = h.toLowerCase();
    if (/[0-9]/.test(h))
      return Number(h);
    if (/[a-f]/.test(h))
      return h.charCodeAt(h) - 87;
    throw new Error('Not a valid hex value.');
  }

  toDecimal() {
    if (/[^0-9a-f]/i.test(this.h))
      return 0;
    return [...this.h].reverse().reduce((r, e, i) => {
      return r + (this.hexToDecimal(e) * Math.pow(16, i));
    }, 0);
  }
};
