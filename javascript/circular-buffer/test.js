'use strict';
var Hello = function(name) {
  this.name = name;
};

Hello.prototype.sayHi = function() {
  return 'Hi, ' + this.name + '!';
};

module.exports.getHello = function(name) { return new Hello(name); };
