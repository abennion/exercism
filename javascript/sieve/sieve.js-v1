'use strict';
module.exports = class {
  constructor(n) {
    this.n = n;
    this.a = {};
    for (let i = 2; i <= this.n; i++)
      this.a[i] = true;
  }

  get primes() {
    let i = 2;
    while (i <= this.n) {
      for (let j = i + 1; j <= this.n; j++) {
        if (j % i === 0)
          this.a[j] = false;
      }
      i += 1;
    }
    return Object.keys(this.a)
      .filter(k => this.a[k] === true).map(x => parseInt(x, 10));
  }
};
