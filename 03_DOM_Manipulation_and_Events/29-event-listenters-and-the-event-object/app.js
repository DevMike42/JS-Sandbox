// document.querySelector('.clear-tasks')
//   .addEventListener('click', function (e) { // Adding event object
//     console.log('Hello World');

//     e.preventDefault(); // Prevents it from redirecting
//   });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinates event relative to the WINDOW
  val = e.clientY;
  val = e.clientX;

  // Coordinates event relative to the ELEMENT
  val = e.offsetY;
  val = e.offsetX;


  console.log(val);
}

