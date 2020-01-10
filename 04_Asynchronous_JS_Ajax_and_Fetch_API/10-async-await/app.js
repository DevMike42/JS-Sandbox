// Basic function 
function myFunc() {
  return 'Hello';
}
console.log(myFunc());

// -------------------------------------
// Using Aync (Same as above only using async)
async function myAsyncFunc() {
  return 'Hello w/async';
}

myAsyncFunc()
  .then(res => console.log(res)); // Returns the Promise Value

// -------------------------------------
// Using Async & Await
async function myAsyncAwaitFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello Awaited'), 1000);
  });

  const error = false;

  if (!error) {
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

myAsyncAwaitFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));

// -------------------------------------
// Using with Fetch
async function getUsers() {
  // await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once it's resolved
  const data = await response.json();
  // Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));