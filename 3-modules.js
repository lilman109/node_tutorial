// CommonJS - every file is a module (by default)
// Modules  - Encapuslated code (only share minimum)
const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative_flavor');
require('./7-mind-grenade');
console.log('names', names);
console.log('data', data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
