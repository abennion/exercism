'use strict';
module.exports = class {
  constructor(s) {
    this.s = s;
  }

  largestProduct(size) {
    size = Number(size);
    if (/[^0-9]/.test(this.s + size) || size < 0)
      throw new Error('Invalid input.');
    if (size === 0)
      return 1;
    if (size > this.s.length)
      throw new Error('Slice size is too big.');
    let largest = 0;
    for (let i = 0; i <= this.s.length - size; i++) {
      let res = [...this.s.slice(i, i + size)].reduce((a, b) => a * b);
      if (res > largest)
        largest = res;
    }
    return largest;
  }
};
