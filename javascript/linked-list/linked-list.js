'use strict';
module.exports = class {
  push(value) {
    let node = {value: value};
    if (this.last !== undefined) {
      node.previous = this.last;
      this.last.next = node;
    }
    this.last = node;
    if (this.first === undefined)
      this.first = node;
  }

  pop() {
    let value = this.last.value;
    this.last = this.last.previous;
    if (this.last !== undefined)
      this.last.next = undefined;
    return value;
  }

  shift() {
    let value = this.first.value;
    this.first = this.first.next;
    if (this.first !== undefined)
      this.first.previous = undefined;
    return value;
  }

  unshift(value) {
    let node = {value: value};
    if (this.first !== undefined) {
      node.next = this.first;
      this.first.previous = node;
    }
    this.first = node;
    if (this.last === undefined)
      this.last = node;
  }

  delete(value) {
    let count = this.count();
    if (count === 0)
      return;
    let n = this.last;
    while (n !== undefined) {
      if (n.value === value) {
        if (n.previous !== undefined)
          n.previous.next = n.next;
        if (n.next !== undefined)
          n.next.previous = n.previous;
        if (n === this.last)
          this.last = undefined;
        if (n === this.first)
          this.first = undefined;
      }
      n = n.previous;
    }
  }

  count() {
    let c = 0;
    let n = this.first;
    while (n !== undefined) {
      c += 1;
      n = n.next;
    }
    return c;
  }
};
