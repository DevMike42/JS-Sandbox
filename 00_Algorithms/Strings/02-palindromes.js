// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// Straight forward solution
const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

console.log('Solution 1');
console.log(isPalindrome('racecar'));
console.log('=========================');


// Solution 2
// Using .every() array prototype
// Technically performs almost 2x as much work as needed
const isPalindrome2 = (str) => {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]; // Accesses mirrored element
  });
};

console.log('Solution 2');
console.log(isPalindrome2('palindrome'));
console.log('=========================');