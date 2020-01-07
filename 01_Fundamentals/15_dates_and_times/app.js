let val;

const today = new Date();
let birthday = new Date('9-10-1981');

val = today;
console.log(val);
console.log(typeof val);
console.log('-------------------------');

val = birthday;
console.log(val);

birthday = new Date('November 20 1979');
val = birthday;
console.log(val);

birthday = new Date('1/20/1085');
val = birthday;
console.log(val);
console.log('-------------------------');

birthday = new Date('1/20/1085 11:25:00'); // Adds the specific time
val = birthday;
console.log(val);
console.log('-------------------------');

// Get Month
val = today.getMonth();
console.log(val);
console.log('-------------------------');

// Get Date (Day of the month)
val = today.getDate();
console.log(val);
console.log('-------------------------');

// Get numberical day of the week
val = today.getDay();
console.log(val);
console.log('-------------------------');

// Get year
val = today.getFullYear();
console.log(val);
console.log('-------------------------');

// Get hours
val = today.getHours();
console.log(val);
console.log('-------------------------');

// Get minutes
val = today.getMinutes();
console.log(val);
console.log('-------------------------');

// Get seconds
val = today.getSeconds();
console.log(val);
console.log('-------------------------');

// Get Milliseconds
val = today.getMilliseconds();
console.log(val);
console.log('-------------------------');

// Get timestamp
val = today.getTime(); // Amount of seconds that have past since Jan 1, 1970
console.log(val);
console.log('-------------------------');

// Change Month
birthday.setMonth(2);
console.log(birthday);

// Set Date
birthday.setDate(12);
console.log(birthday);

// Set Year
birthday.setFullYear(1985);
console.log(birthday);

// Set Hours
birthday.setHours(3);
console.log(birthday);

// Set Minutes
birthday.setMinutes(30);
console.log(birthday);

// Set Seconds
birthday.setSeconds(25);
console.log(birthday);
