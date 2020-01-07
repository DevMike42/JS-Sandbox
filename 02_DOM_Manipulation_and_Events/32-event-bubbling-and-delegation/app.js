// EVENT BUBBLING & DELEGATION
// =======================================================

// EVENT BUBBLING


// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('EVENT BUBBLING');
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');

//   console.log('------------------------------');
// });

// Explanation - When clicking on the card-title, all events for parent elements bubble up and fire as well even though only one element was clicked on.


// =======================================================
// EVENT DELEGATION

// Below code will only work on first item (Also won't work on dynamically created items)
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//   if (e.target.parentElement.className === 'delete-item secondary-content') {
//     console.log('delete-item');
//   }
// }

// Best way to target the link
function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete-item');
    e.target.parentElement.parentElement.remove();
  }
}