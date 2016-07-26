'use strict';
module.exports.WordProblem = class {
  constructor(q) {
    this.q = q;
    this.operator = {
      'plus': (a, b) => a + b,
      'minus': (a, b) => a - b,
      'multiplied by': (a, b) => a * b,
      'divided by': (a, b) => a / b
    };
  }

  answer() {
    let calcs = this.q
      .match(/(plus|minus|divided by|multiplied by)[^0-9\-]+(\-*[0-9]+)/gi);
    if (calcs === null)
      throw new exports.ArgumentError();
    let res = Number(this.q.match(/(\-*[0-9]+)/)[0]);
    return calcs.reduce((r, e) => {
      let m =
        e.match(/(plus|minus|divided by|multiplied by)[^0-9\-]+(\-*[0-9]+)/i);
      return this.operator[m[1]](r, Number(m[2]));
    }, res);
  }
};

exports.ArgumentError = class extends Error {};
