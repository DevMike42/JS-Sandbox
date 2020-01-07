// GENERAL LOOPS

// FOR LOOP
console.log('FOR LOOP');
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    continue; // Stops loop and runs above code then continues to next
  }

  if (i === 5) {
    console.log('Stop the loop');
    break; // Stops code from continuing
  }

  console.log('Number ' + i);
}
console.log('-------------------------');

// WHILE LOOP
console.log('WHILE LOOP');
let j = 0;

while (j < 10) {
  console.log('Number ' + j);
  j++;
}
console.log('-------------------------');

// DO WHILE - Will always run once (Diff between While and Do While Loops)
console.log('DO WHILE');
let k = 0;

do {
  console.log('Number ' + k);
  k++;
}

while (k < 10);
console.log('-------------------------');


// LOOPING THROUGH AN ARRAY
console.log('LOOPING THROUGH AN ARRAY');
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log('-------------------------');

// FOR EACH ARRAY LOOP
console.log('FOR EACH ARRAY LOOP');
cars.forEach(function (car, index, array) { // takes in (iterator, index, array)
  console.log(`${index} : ${car}`);
  console.log(array);
});
console.log('-------------------------');

// MAP
console.log('MAP');
const members = [
  { id: 1, name: 'Q-Tip' },
  { id: 2, name: 'Phife Dawg' },
  { id: 3, name: 'Ali Shaheed' },
  { id: 3, name: 'Jarobi' }
];

const ids = members.map(function (member) {
  return member.id;
});

console.log(ids);
console.log('-------------------------');

// FOR IN LOOP
console.log('FOR IN LOOP');

const user = {
  firstName: 'Barack',
  lastName: 'Obama',
  age: 50
}

for (let x in user) {
  console.log(x); // x will give us just the keys | user gives us the values
  console.log(`${x} : ${user[x]}`);
}
