module.exports = class HelloWorld {
  hello (n) {
    return 'Hello, ' + ((n) ? n : 'World') + '!';
  }
}
