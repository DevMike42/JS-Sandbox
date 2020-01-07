const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const erykah = Object.create(personPrototypes);
erykah.firstName = 'Erykah';
erykah.lastName = 'Badu';
erykah.age = 30;

console.log(erykah);

console.log(erykah.greeting());

erykah.getsMarried('Smalls');

console.log(erykah.greeting());

const mike = Object.create(personPrototypes, {
  firstName: { value: 'Mike' },
  lastName: { value: 'Sweet' },
  age: { value: 40 }
});

console.log(mike);

console.log(mike.greeting());