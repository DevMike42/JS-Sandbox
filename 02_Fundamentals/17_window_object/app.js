// WINDOW OBJECT
// type 'window' in the console

// WINDOW METHODS / OBJECTS / PROPERTIES

// CONSOLE LOG
// window.console.log(123);

// ALERT
// window.alert('Hello World');

// PROMPT
// const input = prompt();
// alert(input);

// CONFIRM
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY; // Verticle
val = window.scrollX; // Horizontal

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object
// window.history.go(-1);
val = window.history.length;

//Navigator Object - Specific to the browser (Named after Netscape)
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);