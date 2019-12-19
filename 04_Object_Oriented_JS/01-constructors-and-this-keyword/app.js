// CONSTRUCTORS

// Person constructor (Manually created)
function Person(name, age) { // Convention - Capitalize function name
  this.name = name; // 'this' refers to the current instance of the object
  this.age = age;
}

const qTip = new Person('Q Tip', 36);
const phifeDawg = new Person('Phife Dawg', 30);

console.log(qTip);
console.log(phifeDawg);

// 'this' in global scope
console.log(this); // Refers to the window (current instance in global scope)

// Constructor that uses an existing constructor "new Date()"
function Employee(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
}

const ali = new Employee('Ali Shaheed Muhammad', '1-13-1982');
const jarobi = new Employee('Jarobi', '3-01-1973');

console.log(ali);
console.log(jarobi);

// Constructor that uses a self created method
// Method - a function inside of an object
function User(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    // .now() = milliseconds since 01/01/1970 
    // Subtracts .getTime() of the birthday from today's date
    const diff = Date.now() - this.birthday.getTime();
    // Creates a date from the timestamp diff 
    /*
        Timestamp of today's date
      - Timestamp of birthday
      ---------------------------
        Timestamp turned into a date
    */
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const biggie = new User('Notorious B.I.G.', '3-10-1972');
console.log(biggie.calculateAge());