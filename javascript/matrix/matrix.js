'use strict';
module.exports = class {
  constructor(s) {
    this.rows = s.split('\n').map(e => e.split(' ').map(e => Number(e)));
    this.columns = this.rows[0].map((c, i) => this.rows.map(r => r[i]));
  }
};
