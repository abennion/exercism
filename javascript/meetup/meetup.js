'use strict';
const days = ['Sunday', 'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const m = {'1st': 0, '2nd': 1, '3rd': 2, '4th': 3, '5th': 4};

module.exports = function(year, month, day, instance) {
  day = 1 + days.indexOf(day) - (new Date(year, month, 1)).getDay();
  let max = (new Date(year, month + 1, 0)).getDate();
  if (instance === 'teenth') {
    while (day < 10)
      day += 7;
  } else if (instance in m) {
    let x = (day - 1 < 0) ? 1 : 0;
    x += m[instance];
    day += (7 * x);
    if (day > max)
      throw new Error('Invalid day.');
  } else if (instance === 'last') {
    while (day + 7 <= max)
      day += 7;
  }
  return new Date(year, month, day);
};
