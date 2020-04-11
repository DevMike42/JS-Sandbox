// CREATE SOME ARRAYS

// Standard Method
const numbers = [43, 56, 33, 23, 44, 36, 5];

// Method using the constructor function
const numbers2 = new Array(22, 45, 33, 76, 54);

// Array of Strings
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

// Array of Mixed data types
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];
// console.log(mixed);

let val;

$(document).ready(() => {
  $('#array1').text(numbers);
  $('#array2').text(numbers2);
});


// ==========================================
// ACCESSING ARRAY DATA

const refreshArrayUI = (arrUiId, arr) => {
  $(arrUiId).text(arr);
};

// Get Array length
const findArrLength = () => {
  val = numbers.length;
  console.log(val);
};

// Check if is Array
const checkIfIsArray = () => {
  val = Array.isArray(numbers);
  console.log(val);
};

// Get single value 
const getSingleValue = () => {
  val = numbers[3];
  console.log(val);
};

// Find index of value
const findIndexOf = () => {
  val = numbers.indexOf(36);
  console.log(val);
};

// ==========================================
// MUTATING ARRAYS

// Insert into Array
const insertInto = () => {
  numbers2[2] = 100;
  refreshArrayUI('#array2', numbers2);
  console.log(numbers2);
};

// Add on to end
const addToEnd = () => {
  numbers2.push(250);
  refreshArrayUI('#array2', numbers2);
  console.log(numbers2);
};

// Take off from end
const removeFromEnd = () => {
  numbers2.pop();
  refreshArrayUI('#array2', numbers2);
  console.log(numbers2);
};

// Add on to front
const addToFront = () => {
  numbers2.unshift(120);
  refreshArrayUI('#array2', numbers2);
  console.log(numbers2);
};

// Take off from front
const removeFromFront = () => {
  numbers2.shift();
  refreshArrayUI('#array2', numbers2);
  console.log(numbers2);
};

// Splice values
const removeSingleIndex = () => {
  numbers2.splice(3, 1); // Parameters = (starting index, delete count)
  refreshArrayUI('#array2', numbers2);
  console.log(numbers2);
};

const removeMultipleIndexes = () => {
  numbers2.splice(2); // Parameters = (starting index) removed remaining if no 2nd param.
  refreshArrayUI('#array2', numbers2);
  console.log(numbers2);
};

// Reverse
// numbers.reverse();

// console.log(numbers);
// console.log(val);
// console.log('--------------------');
// ---------------------------------------

// Concatenate array
// val = numbers.concat(numbers2);

// console.log(numbers);
// console.log(val);
// console.log('--------------------');
// ---------------------------------------

// SORT
// val = fruit.sort(); // Sorts it in Alphabetical order
// console.log(numbers);
// console.log(val);

// val = numbers.sort(); // Notice it sorts by the first number
// console.log(numbers);
// console.log(val);

// Use the "compare function"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });
// console.log(numbers);
// console.log(val);

// Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });
// console.log(numbers);
// console.log(val);

// console.log('--------------------');
// ---------------------------------------

// Find
// function under50(num) {
//   return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);
// console.log('--------------------');
// ---------------------------------------

// $('a').on('click', function (e) {
//   const btnId = e.target.id

//   switch (btnId) {
//     case 'arr-length':
//       findArrLength();
//       break;
//     case 'is-arr':
//       checkIfIsArray();
//       break;
//     case 'get-single-value':
//       getSingleValue();
//       break;
//     case 'insert-into':
//       insertInto();
//       break;
//     case 'index-of':
//       findIndexOf();
//       break;
//     case 'add-onto-end':
//       addToEnd();
//       break;
//     default:
//       break;
//   }
// });