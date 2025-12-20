const obj = require('../build/Debug/native.node');
console.log('hello', obj.hello());
console.log('hello', obj.add(1, 2, 3));
console.log('hello', obj.add());
