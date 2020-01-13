// ReferenceError
try {
  myFunction();
} catch (e) {
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result');
}
console.log('Program continues');

console.log('------------------------');
// --------------------------------------
// TypeError

try {
  null.myFunction();
} catch (e) {
  console.log(e);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('------------------------');
// --------------------------------------
// SyntaxError

try {
  eval('Hello World');
} catch (e) {
  console.log(e);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('------------------------');
// --------------------------------------
// URIError

try {
  decodeURIComponent('%');
} catch (e) {
  console.log(e);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('------------------------');
// --------------------------------------
// Custom Error

const user = { email: 'jdoe@gmail.com' };

try {
  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(`User Error: ${e.message}`);

}