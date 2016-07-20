'use strict';
module.exports = class {
  constructor(octal) {
    this.octal = (/[^0-7]/.test(octal)) ? ['0'] : [...octal.toString()];
  }

  toDecimal() {
    return this.octal.reverse().reduce((r, v, i) => v * Math.pow(8, i) + r, 0);
  }
};
