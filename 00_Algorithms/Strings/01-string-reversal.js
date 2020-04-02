// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution 1
// Simple and straight forward
const reverseStr = (str) => {
  const arr = str.split(''); // Convert string to array
  arr.reverse(); // Reverse array order
  return arr.join(''); // Convert back into a string
};

console.log('Solution 1');
console.log(reverseStr('apple'));
console.log('=========================');


// Solution 2
// Same as Solution 1 (chained together)
const reverseStr2 = (str) => {
  return str.split('').reverse().join('');
};

console.log('Solution 2');
console.log(reverseStr2('hello'));
console.log('=========================');


// Solution 3
// Without using Array Reverse helper (More manual work)
const reverseStr3 = (str) => {
  let reversed = ''; // Create empty string called 'reversed'

  // ES6 For Of loop
  for (let character of str) { // Loops through each char of string
    reversed = character + reversed; // adds each char to front of reversed
    debugger;
  }

  return reversed;
};

console.log('Solution 3');
console.log(reverseStr3('Greetings!'));
console.log('=========================');

// Solution 4
// Uses complicated array helper .reduce()
// reduce helper takes 2 arguments 
// (Arrow Function, Initial "starting" value)
// Initial value gets passed to the 1st arg of the arrow func...
const reverseStr4 = (str) => {
  return str
    .split('') // Convert to array
    .reduce((rev, char) => char + rev, ''); // 
};

console.log('Solution 4');
console.log(reverseStr4('Yup!'));
console.log('=========================');