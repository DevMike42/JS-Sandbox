let val;

val = 5;

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // Returns undefined because val is a number

console.log('---------------------');
// --------------------------------------------------------------------

// Number to string (using number)
console.log('NUMBER TO STRING (using number)');
val = String(5);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('---------------------');
// --------------------------------------------------------------------

// Number to string (using expression)
console.log('NUMBER TO STRING (using expression)');
val = String(4 + 4);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('---------------------');
// --------------------------------------------------------------------

// Boolean to string
console.log('BOOLEAN TO STRING');
val = String(true);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('---------------------');
// --------------------------------------------------------------------

// Date to string
console.log('DATE TO STRING');
val = String(new Date());

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('---------------------');
// --------------------------------------------------------------------

// Array to string (using )
console.log('ARRAY TO STRING');
val = String([1, 2, 3, 4]);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('---------------------');
// --------------------------------------------------------------------

// toString Method
console.log('toString Method');
val = (5).toString();

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('---------------------');
// --------------------------------------------------------------------

// String to number 
console.log('STRING TO NUMBER');
val = Number(5);

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

console.log('---------------------');
// --------------------------------------------------------------------

// Boolean to number 
console.log('BOOLEAN TO NUMBER');
val = Number(true);

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

console.log('---------------------');
// --------------------------------------------------------------------

// Boolean to number 
console.log('BOOLEAN TO NUMBER');
val = Number(false);

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

console.log('---------------------');
// --------------------------------------------------------------------

// null to number 
console.log('NULL TO NUMBER');
val = Number(null);

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

console.log('---------------------');
// --------------------------------------------------------------------

// String to number using letters
console.log('BOOLEAN TO NUMBER');
val = Number('hello');

// Output - Returns NAN (Not A Number)
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

console.log('---------------------');
// --------------------------------------------------------------------

// parseInt 
console.log('parseInt');
val = parseInt('100.30');

// Output - Returns a whole number without decimeals
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

console.log('---------------------');
// --------------------------------------------------------------------

// parseFloat 
console.log('parseInt');
val = parseFloat('100.30');

// Output - Returns a whole number without decimeals
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

console.log('---------------------');
// --------------------------------------------------------------------

// TYPE Coercion
console.log('TYPE COERCION');

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

// Output below is the JS engine concatinating the 6 onto the end of the 5

const val3 = String(5);
const val4 = 6;
const sum2 = val3 + val4;

console.log(sum2);
console.log(typeof sum2);