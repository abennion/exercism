'use strict';
exports.keep = (a, f) => a.filter(f);
exports.discard = (a, f) => a.filter(x => !f(x));
