const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = ''; // Clear input

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Key Press
// taskInput.addEventListener('keypress', runEvent);

// Focus - Click in a field
// taskInput.addEventListener('focus', runEvent);

// Blur - Click out of a field
// taskInput.addEventListener('blur', runEvent);

// Cut - Cut or Command+X
// taskInput.addEventListener('cut', runEvent);

// Paste - or Command+V
// taskInput.addEventListener('paste', runEvent);

// Input event - Any kind of input event
// taskInput.addEventListener('input', runEvent);

// Change event - Comment out Materialize in HTML
select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}