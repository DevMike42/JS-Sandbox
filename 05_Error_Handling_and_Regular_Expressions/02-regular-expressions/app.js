let re;
let result;

re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search (Searches entire paragraph)

console.log(re); // returns the whole value with forward slashes
console.log(re.source); // returns only the value without slashes

console.log('--------------------------');

// -------------------------------------------------------------
// exec() - Return result in an array or null
// Array contains [expression, index it starts at, and the input]
console.log('exec() Method');


re = /exexmethod/;

result = re.exec('testing the exexmethod');
console.log(result);  // expression
console.log(result[0]); // first value in array
console.log(result.index); // index only
console.log(result.input); // search string (input)

console.log('--------------------------');

// -------------------------------------------------------------
// test() - Returns true or false
console.log('test() Method');

re = /testmethod/i;
result = re.test('testing the Testmethod');
console.log(result); // Had to add i to make case insensitive

console.log('--------------------------');

// -------------------------------------------------------------
// match() - Return result array or null
console.log('match() Method');

re = /matchmethod/i;
let str = 'Testing the matchmethod';
result = str.match(re);
console.log(result);

console.log('--------------------------');

// -------------------------------------------------------------
// search() - Returns the index of the first match
console.log('search() Method');


re = /searchmethod/i;
str = 'Testing the searchmethod';
result = str.search(re);
console.log(result);

console.log('--------------------------');

// -------------------------------------------------------------
// replace() - Return a new string with some or all matches of a pattern
console.log('replace() Method');

re = /replacemethod/i;
str = 'Testing the replacemethod';
let newStr = str.replace(re, 'REPLACED');
console.log(newStr);