/*jshint esversion: 6 */
var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(seq) {
  'use strict';

  var sub = { 
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  return seq.split('').map( x => sub[x] ).join('');
};

module.exports = DnaTranscriber;
