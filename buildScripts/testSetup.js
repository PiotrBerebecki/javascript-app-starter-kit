// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
// Treat them as empty function
require.extensions['.css'] = function() {};


function add(a, b) {
  return 2;
}
