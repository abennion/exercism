'use strict';
module.exports = class Node {
  constructor(data) {
    this.data = data;
  }

  insert(data) {
    if (data <= this.data) {
      if (this.left === undefined)
        this.left = new Node(data);
      else
        this.left.insert(data);
    } else if (this.right === undefined)
      this.right = new Node(data);
    else
      this.right.insert(data);
  }

  each(fn) {
    if (this.left !== undefined)
      this.left.each(fn);
    fn(this.data);
    if (this.right !== undefined)
      this.right.each(fn);
  }
};
