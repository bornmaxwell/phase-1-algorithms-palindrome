// index.js

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Reverse the string
  const reversed = str.split('').reverse().join('');

  // Compare the reversed string with the original
  return str === reversed;
}

/* 
  1. Take the input string.
  2. Split the string into an array of characters.
  3. Reverse the array.
  4. Join the reversed array back into a string.
  5. Compare the reversed string with the original string.
  6. If they are the same, return true.
  7. If they are not the same, return false.
*/

/*
  The function determines if a string is a palindrome. A palindrome is a string
  that reads the same forwards and backwards. To check this:
  - The string is reversed.
  - The reversed string is compared to the original string.
  - If they are identical, the function returns true, indicating the string is a palindrome.
  - Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  // Basic tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  // Additional tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // Single character

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("")); // Empty string

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab")); // Two different characters
}

// Export the function for testing
module.exports = isPalindrome;
