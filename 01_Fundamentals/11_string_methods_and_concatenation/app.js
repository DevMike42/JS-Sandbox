const firstName = 'William';
const lastName = 'Johnson';
const age = 20;
const str = 'Hello there my name is Mike';
const tags = 'web development, web design, programing';

let val;


val = firstName + lastName;
console.log(val);

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Appending
val = 'Mike ';
val += 'Rivera'
console.log(val);

val = 'Hellow, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val = 'That\'s awesome.I can\'t wait'; // Use a \ to escape a single quote
console.log(val);

// Length (Property)
val = firstName.length; // Do not need () because it's a property not a method
console.log(val);

// concat() (Method)
val = firstName.concat(' ', lastName); // Concatenates (Same as line 12)
console.log(val);

// Change case methods - toUppercase() | toLowercase()
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLocaleLowerCase();
console.log(val);

// indexOf() Method
val = firstName.indexOf('l'); // Returns the index of the first l from the start
console.log(val);

// lastIndexOf() Method
val = firstName.lastIndexOf('l'); // Returns the index of the first l from the end
console.log(val);

// charAt()
val = firstName.charAt(2); // Returns value of character at index 2
console.log(val);

// Find last charAt()
val = firstName.charAt(firstName.length - 1); // Length of firstName minus 1 (first character is at index 0)
console.log(val);

// substring()
val = firstName.substring(0, 4); // Pulls indexes 0 to 4 and returns new string
console.log(val);

// slice()
val = firstName.slice(0, 4); // Similar to substring
console.log(val);
val = firstName.slice(-3); // Starts from end and returns last 3 indexes as string
console.log(val);

// split()
val = str.split(' '); // Splits string into an array by the space
console.log(val);
val = tags.split(','); // Splits string into an array by ,
console.log(val);

// replace()
val = str.replace('Mike', 'Big Poppa'); // Replaces Mike with Big Poppa
console.log(val);

// includes()
val = str.includes('Hello'); // Returns boolean value if parameters exist in the variable
console.log(val);

