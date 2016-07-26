'use strict';
const directions = {
  north: [0, 1], east: [1, 0],
  south: [0, -1], west: [-1, 0]
};
const bearings = Object.keys(directions);
const instructionMap = {A: 'advance', L: 'turnLeft', R: 'turnRight'};
module.exports = class {
  orient(bearing) {
    this.bearing = bearing;
  }

  turnRight() {
    this.bearing = bearings[(bearings.indexOf(this.bearing) + 1) % 4];
  }

  turnLeft() {
    this.bearing = bearings[(bearings.indexOf(this.bearing) + 4 - 1) % 4];
  }

  at(...coords) {
    this.coordinates = coords;
  }

  advance() {
    this.coordinates[0] += directions[this.bearing][0];
    this.coordinates[1] += directions[this.bearing][1];
  }

  place(p) {
    this.at(p.x, p.y);
    this.orient(p.direction);
  }

  instructions(s) {
    return [...String(s)].map(k => instructionMap[k]);
  }

  evaluate(s) {
    this.instructions(s).forEach(m => this[m]());
  }
};
