// BUILT IN CONSTRUCTORS

// ----------------------------------------
/* Strings */ console.log('----- Strings -----');

const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1);
console.log(name2);

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name1); // Returns string
console.log(typeof name2); // Returns object

// Returns YES because everything matches
if (name1 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Returns NO because name2 is an object
if (name2 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Returns YES because == only checks value and not type
if (name2 == 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// ----------------------------------------
/* Numbers */ console.log('----- Numbers -----');

const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(typeof num1); // Returns object

console.log(num2);
console.log(typeof num2);

// ----------------------------------------
/* Booleans */ console.log('----- Booleans -----');

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(typeof bool1);

console.log(bool2);
console.log(typeof bool2);

// ----------------------------------------
/* Functions */ console.log('----- Functions -----');

const getSum1 = function (x, y) {
  return x + y;
}
console.log(getSum1(1, 1));

const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum1(1, 1));

// ----------------------------------------
/* Objects */ console.log('----- Objects -----');

const john = { name: 'John' };
const john2 = new Object({ name: 'John2' });

console.log(john);
console.log(john2);

// ----------------------------------------
/* Arrays */ console.log('----- Arrays -----');

const arr1 = [1, 2, 3, 4];
const arr2 = new Array(3, 4, 5, 6);

console.log(arr1);
console.log(arr2);

// ----------------------------------------
/* Regulare Expressions (RegEXP) */ console.log('----- (RegEXP) -----');

const reg1 = /\w+/;
const reg2 = new RegExp('\\w+'); // Need to escape with backslash

console.log(reg1);
console.log(reg2);