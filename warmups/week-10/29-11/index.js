// # Caesar's Cipher

// Julius Caesar protected his confidential information by encrypting it using a cipher.
// Caesar's cipher shifts each letter by a number of letters.
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
// In the case of a rotation by 3: a, b, c, and d would map to d, e, f and g.

// Create a function that takes a string and an integer (the rotation factor).
// It should return an encrypted string.

// ---------------------
// Example
// ```javascript
// cipher("Joel is great!!!", 3)
// ```
// should return `"Mrho lv juhdw!!!"`

// ---------------------
// Bonus

// Create a function to decrypt a string with the key

// Create another function to bruteforce the solution

// ---------------------
// Hints

// [https://cryptii.com/pipes/caesar-cipher](https://cryptii.com/pipes/caesar-cipher)

// [Caesar Cipher on Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)

// If you want to use arrays you can use:
// javascript
// letters = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ]
// capitalLetters = [
//   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
//   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
// ]
// Completed method from 9:45
const cipher = function (string, key) {
  const result = [];

  //lower casing the string input so we don't have to
  //worry about upper and lower case letters, which are
  //different indexes in the alphabet
  string = string.toLowerCase();
  const array = Array.from(string);

  for (let i = 0; i < array.length; i++) {
    const index = array[i].charCodeAt(0); //get the char code of the current letter
    let newIndex = index + key; //add the key to the char code

    if (newIndex > 122) {
      newIndex = newIndex - 26;
      //if the new index is greater than 122,
      //subtract 26 to bring it back to the start
      //of the alphabet. won't work with key > 26
    }
    if (newIndex === 32 + key) {
      //is the symbol a space, which is index of 32
      newIndex = 32;
    }

    result.push(String.fromCharCode(newIndex));
  }

  return result.join("");
};

// Compact version using Dan's % method
const cipher2 = function (string, key) {
  const result = [];
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    const index = string.charCodeAt(i); //get the char code of the current letter
    result[i] = String.fromCharCode(97 + ((index - 97 + key) % 26));
    // 97 is ascii code for lowercase 'a'
    // 26 is the number of letters in the alphabet
    // otherwise, I have no idea why this works
  }

  return result.join("");
};

console.log(cipher("Ken burns and drum machines", 3));
console.log(cipher("Start demo with your readme.md", 2));

console.log(cipher2("React and microsoft", 4));
