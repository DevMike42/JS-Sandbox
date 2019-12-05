const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without Template Strings (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '<li>City: ' + city + '</li></li></ul>';

// More clear
html = '<ul>' +
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>City: ' + city + '</li>' +
  '</ul>';


// With Template Strings aka Template Literals (ES6)

function hello() {
  return 'hello';
}
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Expression: ${2 + 2}</li> 
    <li>Function: ${hello()}</li>
    <li>Turnary Operator: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

// uses backticks and ${} for handling variables


document.body.innerHTML = html;