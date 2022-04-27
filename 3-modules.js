//CommoJs, every file is module(by default)
//Modules - encapsulated Code (only share minimum)

const names= require('./4-names');
const sayHi = require('./5-utilis')
const data = require('./6-alternative-flavor')
require('./7-mind-granade')


console.log(data)
sayHi('suzan')
sayHi(names.peter)
sayHi(names.john)