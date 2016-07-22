'use strict';
exports.bufferEmptyException = () => new Error('Buffer is empty.');
exports.bufferFullException = () => new Error('Buffer is full.');
exports.circularBuffer = size => {
  const buffer = [];
  let isEmpty = () => buffer.length === 0;
  let isFull = () => buffer.length > size - 1;

  return {
    clear: () => {
      buffer.length = 0;
    },
    write: value => {
      if (value) {
        if (isFull())
          throw exports.bufferFullException();
        buffer.unshift(value);
      }
    },
    forceWrite: value => {
      if (isFull())
        buffer.pop();
      buffer.unshift(value);
    },
    read: () => {
      if (isEmpty())
        throw exports.bufferEmptyException();
      return buffer.pop();
    }
  };
};
