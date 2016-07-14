var SpaceAge = function(seconds) {
  this.seconds = seconds;
};

SpaceAge.prototype.years = function(seconds, orbit) {
  return Math.round((1 / orbit) * seconds / 31557600 * 100) / 100;
};

const planets = {
  earth     : 1,
  mercury   : 0.2408467,
  venus     : 0.61519726,
  mars      : 1.8808158,
  jupiter   : 11.862615,
  saturn    : 29.447498,
  uranus    : 84.016846,
  neptune   : 164.79132
};

Object.keys(planets).forEach((planet) => {
  var method = 'on' + planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase();
  SpaceAge.prototype[method] = function() {
    return this.years(this.seconds, planets[planet]);
  };
});

module.exports = SpaceAge; 
