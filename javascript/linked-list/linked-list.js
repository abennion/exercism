'use strict';
module.exports = class {
  push(value) {
    console.log('pushing ' + value);
    let node = {value: value};
    if (this.last !== undefined) {
      node['previous'] = this.last;
      this.last['next'] = node;
    }
    this.last = node;
    if (this.first === undefined)
      this.first = node;
    console.log('pushed: ' + this.toString());
  }

  pop() {
    let value = this.last.value;
    console.log('popping [' + value + ']');
    this.last = this.last.previous;
    // last can be empty, if the queue is empty
    // do we keep a counter????
    if (this.last !== undefined)
      this.last['next'] = undefined;
    console.log('popped: ' + this.toString());
    return value;
  }

  shift() {
    let value = this.first.value;
    console.log('shifting [' + value + ']');
    this.first = this.first.next;
    if (this.first !== undefined)
      this.first['previous'] = undefined;
    console.log('shifted: ' + this.toString());
    return value;  
  }

  unshift(value) {
    console.log('unshifting ' + value);
    let node = {value: value};
    if (this.first !== undefined) {
      node['next'] = this.first;
      this.first['previous'] = node;
    }
    this.first = node;
    if (this.last === undefined)
      this.last = node;
    console.log('unshifted: ' + this.toString());
  }

  delete() {
    
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

  toString() {
    let n = this.first;
    let s = '';
    while (n !== undefined) {
      s += '[' + n.value + ']';
      n = n.next;
    }
    return s;
  }
};
