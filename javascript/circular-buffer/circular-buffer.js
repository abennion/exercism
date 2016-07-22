'use strict';
var CircularBuffer = function(size) {
    this.size = size;
    this.clear();
};

CircularBuffer.prototype.clear = function() {
    this.buffer = new Array(this.size);
    this.head = this.tail = Math.floor(Math.random() * this.size); // why not?
};

CircularBuffer.prototype.read = function() {
    console.log('reading...');
    console.log('this: ' + Object.keys(this));
    console.log('this.buffer: ' + this.buffer);
    if (this.buffer[this.tail] === undefined) {
        throw exports.bufferEmptyException();
    }
    var val = this.buffer[this.tail];
    delete this.buffer[this.tail];
    this.tail = (this.tail + 1) % this.size;
    return val;
};

CircularBuffer.prototype.write = function(element) {
    if (!element) { return; }
    this.forceWrite(element, true);
};

CircularBuffer.prototype.forceWrite = function(element, showerror) {
    if (this.buffer[this.head] !== undefined) {
        if (showerror) {
            throw exports.bufferFullException();
        } else if (this.head === this.tail) {
            // overwriting data so push the read position forward
            this.tail = (this.tail + 1) % this.size;
        }
    }
    this.buffer[this.head] = element;
    this.head = (this.head + 1) % this.size;
};

var BufferEmptyException = function() {
  return new Error('Buffer is empty.');
};

var BufferFullException = function() {
  return new Error('Buffer is full.');
};

exports.circularBuffer = function(s) { return new CircularBuffer(s); };
exports.bufferEmptyException = BufferEmptyException;
exports.bufferFullException = BufferFullException;
