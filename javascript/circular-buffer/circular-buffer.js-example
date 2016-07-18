function circularBuffer(size) {
  /*let queue = [];

  function isFull() {
    return queue.length === size;
  }

  function isEmpty() {
    return queue.length === 0;
  }

  function safeRead() {
    return queue.shift();
  }

  function checkEmptyness() {
    if (isEmpty()) {
      throw bufferEmptyException();
    }
  }

  function read() {
    checkEmptyness();
    return safeRead();
  }

  function write(element) {
    if (!element) {
      return;
    }

    if (isFull()) {
      throw bufferFullException();
    }

    queue.push(element);
  }

  function clear() {
    queue = [];
  }

  function forceWrite(element) {
    if (isFull()) {
      safeRead();
    }
    write(element);
  }

  return Object.freeze({ read, write, clear, forceWrite });
  */

  return {
    write: (value) => {
      console.log('value: ' + value);
    },
    get read() {
      // the spec expects a function,
      // so the getter needs to return a fn
      return () => { 
        let e = bufferEmptyException();
        console.log('size: ' + size);
        console.log('error: ' + e);
        throw e;
      }
    }
  };
}

function bufferEmptyException() {
  return new Error('Buffer Empty Exception');
}

function bufferFullException() {
  return new Error('Buffer Full Exception');
}

module.exports = {
  circularBuffer,
  bufferFullException,
  bufferEmptyException
};
