var School = function() {
  'use strict';
  this.myRoster = {};
};

School.prototype.roster = function() {
  return this.myRoster;
};

School.prototype.add = function(name, grade) {
  (typeof this.myRoster[grade] === 'undefined') ? 
    this.myRoster[grade] = [ name ] :
    this.myRoster[grade] = this.myRoster[grade].concat(name).sort();
};

School.prototype.grade = function(grade) {
  return (typeof this.myRoster[grade] === 'undefined') ?
    [] : this.myRoster[grade];
}

module.exports = School;
