var Clock = function(hour, minute) {
  this.hour = hour;
  this.minute = (typeof minute === 'undefined') ? 0 : minute;
};

Clock.prototype.equals = function(clock) {
  return this.hour === clock.hour && this.minute === clock.minute;
};

Clock.prototype.toString = function() {
  return ('00' + this.hour).slice(-2) + ':' + ('00' + this.minute).slice(-2);
};

Clock.at = function(hour, minute) {
  return new Clock(hour, minute);
};

module.exports = Clock;
