// PRIMITIVE TYPES

// String 
const name = 'John Doe';

// Number
const age = 45;

// Boolean
const hasKids = true;

// Null
const car = null;
// note - kind of a bug (Google type of null is object)

// Undefined
let test;
// note - Cannot use const or will throw error

// Symbol
const sym = Symbol();

console.log('PRIMITIVE TYPES');

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym);

console.log('------- END -------');

// ------------------------------------------

// REFERENCE TYPES

// Array
const hobbies = ['movies', 'music'];

// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
};

// Date
const today = new Date();


console.log('REFERNCE TYPES');

console.log(hobbies);
console.log(typeof hobbies);
console.log(address);
console.log(typeof address);
console.log(today);
console.log(typeof today);