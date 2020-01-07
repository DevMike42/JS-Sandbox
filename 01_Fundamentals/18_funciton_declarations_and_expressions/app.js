// FUNCTION DECLARATIONS

function greetES5(firstName, lastName) {
  // code within the curly brackets is considered to be within the function scope

  // for handling if no arguements are passed when calling the function
  if (typeof firstName === 'undefined') { firstName = 'John' }
  if (typeof lastName === 'undefined') { lastName = 'Doe' }

  // Value returned
  return 'Hello ' + firstName + ' ' + lastName;
};

// Calling the function
greetES5(); // Did not show in console because 'return' only saves the value

// How to console log the value
console.log(greetES5()); // Without agruments
console.log(greetES5('Mike', 'Smith'));


// ES6 Version of creating default values if no arguments are passed
function greetES6(name = 'Jacob') { // Sets Jacob as the default value
  return 'Hi ' + name + '!';
}

console.log(greetES6()); // Without arguments
console.log(greetES6('Paul'));

// ===================================================================
// Fuction Expressions - Setting a function as a variable assigment

// gernally not named (the variable contains the name)
const square = function (x) {
  return x * x;
};

console.log(square(8));

// ===================================================================
// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// Function that's declared and run at the same time

(function () {
  console.log('IIFE Ran...');
})();

(function (name) {
  console.log('Hello ' + name);
})('Brad');

// ===================================================================
// PROPERTY METHODS

const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();