let re;

// Literal Characters
re = /hello/;

// Metacharacter Symbols
re = /^h/i; // Must start with 'h' *case insensitive
re = /world$/i; // Must end with 'world' *case insensitive
re = /^hello$/i; // Must begin AND end with 'hello'
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times (wild card)
re = /gre?a?y/i; // Optional characters
re = /gre?a?y\?/i; // Escape characters


// String to match
const str = 'gray?';


// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);

  }
}

reTest(re, str);