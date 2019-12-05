// if(something) {
//   do soemthing
// } else {
//   do somethingElse
// }

const id = '100';

// EQUAL TO
if (id == 100) { // == Tests only the value (not the type)
  console.log('Correct');
} else {
  console.log('Incorrect');
};

// NO EQUAL TO
if (id !== 100) {
  console.log('Correct'); // Comparing number to string
} else {
  console.log('Incorrect');
};

// EQUAL TO VALUE & TYPE
if (id === 100) { // === Tests both value and type
  console.log('Correct');
} else {
  console.log('Incorrect'); // Fails because types do not match
}

// Test if id exists. Incorrect way because if not defined this will throw an error
if (id) {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// Test if id exists. Correct way
if (typeof id2 !== 'undefined') {
  console.log(`The ID is ${id2}`);
} else {
  console.log('No ID');
}


