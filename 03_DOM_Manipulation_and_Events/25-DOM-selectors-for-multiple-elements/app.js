// document.getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// =================================================================
// document.getElementByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// =================================================================
// Convert HTML Collection into an array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function (li) {
  console.log(li.className);
  li.textContent = 'Hello';
});

console.log(lis);