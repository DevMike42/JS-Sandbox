let re;

// Literal Characters
re = /hello/;

// Shorthand Character Classes
re = /\w/;  // Word character - alphanumberic or _
re = /\w+/;  // + = one or more
re = /\W/;  // Non-Word characters (anything but alphanumber or _)
re = /\d/; // Match any digit
re = /\d+/; // + = one or more
re = /\D/; // Non-digit 
re = /\s/; // Match whitespace char
re = /\S/; // Match Non-whitespace char
re = /Hell\b/i;  // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y


// String to match
const str = 'xu';


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