'use strict';
const defaultNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred',
  'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];

const plants = {
  V: 'violets',
  C: 'clover',
  R: 'radishes',
  G: 'grass'
};

module.exports = class {
  constructor(g, names = defaultNames) {
    [this.r1, this.r2] = g.split('\n');
    this.names = names.sort();
    for (let name of this.names) {
      let i = names.indexOf(name) * 2;
      this[name.toLowerCase()] = [plants[this.r1[i]], plants[this.r1[i + 1]],
        plants[this.r2[i]], plants[this.r2[i + 1]]];
    }
  }
};
