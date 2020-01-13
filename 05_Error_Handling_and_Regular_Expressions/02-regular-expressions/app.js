let re;

re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('mike hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
const result = re.test('Hello');

console.log(result);