'use strict';
module.exports = class {
  flatten(a) {
    return a.reduce((r, e) => {
      if (Array.isArray(e)) {
        r.push(...this.flatten(e));
        return r;
      }
      if (e !== null)
        r.push(e);
      return r;
    }, []);
  }
};
