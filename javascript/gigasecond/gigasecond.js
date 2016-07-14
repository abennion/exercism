/*jslint esversion: 6 */
var Gigasecond = function(startDate) {
  'use strict';

  this.startDate = startDate;
};

Gigasecond.prototype.date = function() {
  return new Date(this.startDate.getTime() + Math.pow(10, 12));
};

module.exports = Gigasecond;
