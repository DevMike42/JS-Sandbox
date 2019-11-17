// var, let, const

var name = 'John Doe';
console.log(name);

// var can be re-assigned
name = 'Jane Smith';
console.log(name);

// Init variable
var greeting;
// will log as undefined
console.log(greeting);

greeting = 'Hello';
console.log(greeting);

// Variables can include: letters, numbers, _, $
// Cannot start with a number

// Multi-word variable naming conventions
var firstName; // Camelcase
var first_name; // Underscore
var FirstName; // Pascal case
var firstname;

// -----------------------------------------------

// LET
let name2 = 'John LET';
console.log(name2);
name2 = 'Jane LET';
console.log(name2);

// -----------------------------------------------

// CONST
const name3 = 'Jim CONST';
console.log(name3);

// Cannot re-assign
// name3 = 'Sarah CONST';

// Must assign a value;
// const greetingConst;

// CAN alter data attributes if const variable is an object
const person = {
  name: 'Bob',
  age: 20
};
console.log(person);

person.name = 'New Bob';
person.age = 40;
console.log(person);

// CAN alter data within an array
const array = [1, 2, 3, 4, 5];
console.log(array);
array.push(6);
console.log(array);

// CANNOT re-assign as a new array
// array = [1, 2, 3, 4, 5, 6, 7];

// CANNOT initialize
// const initializedVariable;