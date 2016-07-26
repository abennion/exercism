'use strict';
module.exports = class {
  constructor(height) {
    this.rows = [[1]];
    for (let i = 1; i < height; i++) {
      let lastRow = [0].concat(this.rows[i - 1]).concat(0);
      let row = Array.apply(null, Array(i + 1)).map(e => 1);
      for (let j = 1; j < i; j++) {
        row[j] = lastRow[j] + lastRow[j + 1];
      }
      this.rows.push(row);
    }
  }

  get lastRow() {
    return this.rows[this.rows.length - 1];
  }
};
