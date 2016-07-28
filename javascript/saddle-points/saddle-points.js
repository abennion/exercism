'use strict';
module.exports = class Matrix {
  constructor(s) {
    this.rows = s.split('\n').map(r => r.split(' ').map(e => Number(e)));
    this.columns = this.rows[0].map((c, i) => {
      return this.rows.map(r => r[i]);
    });
  }

  get saddlePoints() {
    let max = this.rows.map(r => Math.max.apply(null, r));
    let min = this.columns.map(c => Math.min.apply(null, c));
    let points = [];
    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.columns.length; j++) {
        if (this.rows[i][j] === max[i] && this.rows[i][j] === min[j])
          points.push([i, j]);
      }
    }
    return points;
  }
};
