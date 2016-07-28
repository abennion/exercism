'use strict';
module.exports = class CustomSet {
  constructor(a) {
    this.a = [];
    if (a !== undefined)
      a.forEach(e => this.add(e));
  }

  empty() {
    return this.a.length === 0;
  }

  contains(v) {
    return this.a.includes(v);
  }

  subset(s) {
    if (s.empty())
      return true;
    return s.a.filter(e => !this.contains(e)).length === 0;
  }

  disjoint(s) {
    return s.empty() || this.empty() ||
      s.a.filter(e => this.contains(e)).length === 0;
  }

  size() {
    let a = this.a.reduce((r, e) => {
      if (!r.includes(e))
        r.push(e);
      return r;
    }, []);
    return a.length;
  }

  eql(s) {
    return s.size() === this.size() &&
      s.a.filter(e => !this.contains(e)).length === 0;
  }

  add(v) {
    if (!this.contains(v))
      this.a.push(v);
    return this;
  }

  intersection(s) {
    return new CustomSet(this.a.filter(e => s.contains(e)));
  }

  difference(s) {
    return new CustomSet(this.a.filter(e => !s.contains(e)));
  }

  union(s) {
    s.a.forEach(e => {
      if (!this.contains(e))
        this.add(e);
    });
    return new CustomSet(this.a.sort());
  }

  delete(v) {
    return new CustomSet(this.a.filter(e => v !== e));
  }

  clear() {
    return new CustomSet([]);
  }

  toList() {
    return this.a;
  }
};
