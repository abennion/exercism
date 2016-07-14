var names = [];

var Robot = function() {
  this.reset();
};

Robot.prototype.createName = function() {
  return 'xxyyy'.replace(/[xy]/g, function(c) {
    max = (c == 'x') ? 26 : 10;
    r = (Math.random() * max) | 0;
    return (c == 'x') ? String.fromCharCode(65 + r) : r.toString();
  });
}; 

Robot.prototype.createUniqueName = function() {
  var name;
  do {
    name = this.createName();
  } while(names[name] === true);
  names[name] = true;
  return name;
};
 
Robot.prototype.reset = function() {
  this.name = this.createUniqueName(); 
};

module.exports = Robot;
