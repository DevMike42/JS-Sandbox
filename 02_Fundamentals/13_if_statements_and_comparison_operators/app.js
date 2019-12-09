// if(something) {
//   do soemthing
// } else {
//   do somethingElse
// }

const id = 100;

// ----------------------------------------------
// EQUAL TO
console.log('EQUAL TO');

if (id == 100) { // == Tests only the value (not the type)
  console.log('Correct');
} else {
  console.log('Incorrect');
};

// ----------------------------------------------
// NOT EQUAL TO

console.log('--------------------------------');
console.log('NOT EQUAL TO');

if (id !== 100) {
  console.log('Correct'); // Comparing number to string
} else {
  console.log('Incorrect');
};

// ----------------------------------------------
// EQUAL TO VALUE & TYPE

console.log('--------------------------------');
console.log('EQUAL TO (VALUE & TYPE)');

if (id === 100) { // === Tests both value and type
  console.log('Correct');
} else {
  console.log('Incorrect'); // Fails because types do not match
}

// ----------------------------------------------
// Test if exists or undefined

console.log('--------------------------------');
console.log('TEST IF EXISTS (INCORRECT WAY)');

// Test if id exists. Incorrect way because if not defined this will throw an error
if (id) {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

console.log('--------------------------------');
console.log('TEST IF EXISTS (CORRECT WAY)');
// Test if id exists. Correct way
if (typeof id2 !== 'undefined') {
  console.log(`The ID is ${id2}`);
} else {
  console.log('No ID');
}

// ----------------------------------------------
// GREATER OR LESS THAN

console.log('--------------------------------');
console.log('GREATER OR LESS THAN');

if (id > 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
};

// ----------------------------------------------
// GREATER OR EQUAL TO

console.log('--------------------------------');
console.log('GREATER OR EQUAL TO');

if (id >= 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
};

// ----------------------------------------------
// IF ELSE

console.log('--------------------------------');
console.log('IF ELSE');

const color = 'yellow';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') { // 'else if' will continue tests
  console.log('Color is blue');
} else { // 'else' alone will end
  console.log('Color is not red or blue');
};

// ============================================
// LOGICAL OPERATORS

console.log('======================================');
console.log('LOGICAL OPERATORS');
console.log('');

const name = 'Steve';
const age = 20;

// ----------------------------------------------
// AND &&
console.log('AND &&');

if (age > 0 && age < 12) { // '&&' operator = logical operator meaning AND
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
};

console.log('--------------------------------');

// ----------------------------------------------
// OR ||
console.log('OR ||');

if (age < 16 || age > 65) { // '||' operator = logical operator meaning OR
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

console.log('--------------------------------');

// ----------------------------------------------
// TURNARY OPERATOR
console.log('TURNARY OPERATOR');

// Much easier way to write a conditional
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
// '?' = If conditional is met then --> 'CORRECT'
// ':' = else ---> output 'INCORRECT'

console.log('--------------------------------');

// ----------------------------------------------
// WITHOUT BRACES
console.log('WITHOUT BRACES');

if (id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');