'use strict';
module.exports = class {
  constructor(num) {
    this.digits = [...num].map(d => parseInt(d, 10));
  }

  slices(l) {
    if (this.digits.length < l)
      throw new Error('Slice size is too big.');
    let s = [];
    for (let i = 0; i <= this.digits.length - l; i++)
      s.push(this.digits.slice(i, i + l));
    return s;
  }
};
