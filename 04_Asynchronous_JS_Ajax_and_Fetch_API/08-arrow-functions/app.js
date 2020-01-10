// Standard Vanilla function
const sayHello = function () {
  console.log('Hello');
}
sayHello();

// --------------------------------------
// Arrow version
const sayHelloArrow = () => {
  console.log('Hello - Arrow style');
}

sayHelloArrow();

// --------------------------------------
// One line function does not need braces
const sayHelloShort = () => console.log('Hello - Short Arrow style');

sayHelloShort();

// --------------------------------------
// Returning 
const sayHelloReturn = function () {
  return 'Hello - using return';
};
// Need to log it to use value
console.log(sayHelloReturn());

// --------------------------------------
// One line returns (Same as above)
const sayHelloReturnArrow = () => 'Hello - Arrow style return';

console.log(sayHelloReturnArrow());

// --------------------------------------
// Returning an object literal
const sayHelloObject = () => ({ msg: 'Hello - Object' })

console.log(sayHelloObject());

// --------------------------------------
// Parameters (Single param does not need parenthesis)
const sayHelloParam = name => console.log(`Hello ${name}`);

sayHelloParam('Mike');

// --------------------------------------
// Multiple parameters (needs parenthesis)
const sayHelloFull = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHelloFull('Greatest', 'Ever');

// --------------------------------------
// Callbacks - Vanilla js
const users = ['Agnus', 'Agatha', 'Jermaine', 'Jack'];

const nameLengths = users.map(function (name) {
  return name.length;
});
console.log(nameLengths);

// Shorter
const nameLengthsArrow = users.map((name) => {
  return name.length;
});
console.log(nameLengthsArrow);

// Shortest
const nameLengthsShortest = users.map(name => name.length)
console.log(nameLengthsShortest);

// --------------------------------------
