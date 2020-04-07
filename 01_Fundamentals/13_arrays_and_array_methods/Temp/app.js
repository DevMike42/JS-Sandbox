// CREATE SOME ARRAYS

// Standard Method
const numbers = [43, 56, 33, 23, 44, 36, 5];

// Method using the constructor function
const numbers2 = new Array(22, 45, 33, 76, 54);

// Array of Strings
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

// Array of Mixed data types
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];
console.log(mixed);

let val;


$('a').on('click', function (e) {
  const btnId = e.target.id
  console.log(btnId);

  switch (btnId) {
    case 'arr-length':
      findArrLength();
      break;

    default:
      break;
  }
});




// Get Array length
const findArrLength = () => {
  val = numbers.length;
  console.log(val);
};

// ---------------------------------------

// Check if is Array
val = Array.isArray(numbers);

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Get single value 
val = numbers[3];

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Insert into Array
numbers[2] = 100;

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Find index of value
val = numbers.indexOf(36);

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// ==========================================
// MUTATING ARRAYS

// Add on to end
numbers.push(250);

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Add on to front
numbers.unshift(120);

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Take off from end
numbers.pop();

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Take off from front
numbers.shift();

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Splice values
numbers.splice(1, 1); // Parameters = (starting index, ending index)

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Reverse
numbers.reverse();

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// Concatenate array
val = numbers.concat(numbers2);

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

// SORT
val = fruit.sort(); // Sorts it in Alphabetical order
// console.log(numbers);
console.log(val);

val = numbers.sort(); // Notice it sorts by the first number
// console.log(numbers);
console.log(val);

// Use the "compare function"
val = numbers.sort(function (x, y) {
  return x - y;
});
// console.log(numbers);
console.log(val);

// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});
// console.log(numbers);
console.log(val);

console.log('--------------------');
// ---------------------------------------

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
console.log('--------------------');
// ---------------------------------------

