const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 40,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'Florida'
  },
  getBirthYear: function () {
    return 2019 - this.age; // Use 'this' when inside an object
  }
};

let val;

val = person;

// Get specific value
val = person.firstName;
console.log(val);
console.log('---------------------');

// Another way (Not as common)
val = person['firstName'];
console.log(val);
console.log('---------------------');

val = person.age;
console.log(val);
console.log('---------------------');

val = person.hobbies;
console.log(val);
console.log('---------------------');

val = person.address;
console.log(val);
console.log('---------------------');

val = person.address.city;
console.log(val);
console.log('---------------------');

val = person.getBirthYear();
console.log(val);
console.log('---------------------');


const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nancy', age: 40 },
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}