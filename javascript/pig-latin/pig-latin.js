'use strict';
exports.translate = s => {
  return s.split(' ').map(w => {
    let chunks = w.split(/(^[^aeiou]qu|^qu|^ch|^thr|^th|^sch|^[^aeiou])/);
    if (chunks.length > 1)
      w = chunks[2] + chunks[1];
    return w + 'ay';
  }).join(' ');
};
