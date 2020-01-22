// SETS - Store unique values of ANY type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // Will not add because they have to be unique values

// const set2 = new Set([1, true, 'string']);
// console.log(set2);


console.log(set1);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50)); // Can use something that = 100
console.log(set1.has({ name: 'John' })); // not a primitive value
console.log({ name: 'John' } === { name: 'John' }); // same as above

// Delete from set
set1.delete(100);
console.log(set1);

console.log('------------');

// ITERATING THROUGH SETS

// for...of
for (let item of set1) {
  console.log(item);
}

console.log('------------');

for (let item of set1.keys()) {
  console.log(item);
}

console.log('------------');

for (let item of set1.values()) {
  console.log(item);
}

console.log('--------------------------');

// forEach loop
set1.forEach((value) => {
  console.log(value);
});

console.log('--------------------------');

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
