let re;

// Literal Characters
re = /hello/;

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e (better than optional char)
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Match anything except a G or F (^ inside brackets)
re = /[A-Z]ray/; // Match any uppercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9][0-9]ray/; // Match any 2 digits

// Braces {} - Quantifies
re = /Hel{2}o/i; // Must occur exactly {x} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {x-y} amount of times
re = /Hel{2,}o/i; // Must occur at least {x} amount of times

// Parenthesis () - Grouping
re = /([0-9]x){3}/; // Must be #x#x#x
re = /^([0-9]x){3}$/; // Must be #x#x#x EXACTLY

// String to match
const str = '3x3x3x';


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