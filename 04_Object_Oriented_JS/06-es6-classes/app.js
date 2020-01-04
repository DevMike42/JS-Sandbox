class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Static Method
  static addNumbers(x, y) {
    return x + y;
  }
}

const erykah = new Person('Erykah', 'Badu', '11-13-1980');

console.log(erykah);

console.log(erykah.calculateAge());

erykah.getsMarried('Smalls');

console.log(erykah.greeting());

console.log(Person.addNumbers(1, 2));
