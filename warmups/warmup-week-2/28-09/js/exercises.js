console.log("IS THIS");
// // # Sum of arrays
// // Write a function that receives two arguments, both of which are
// Arrays and sums them. These arrays contain only numbers. You don't
// know their length and they can contain both integers and floating point
// numbers.

// // ## Example
// // ```
// //   [2, 6.4, 3] + [3, 3.6, 2] = 20
// // ```
let one = [1, 4, 6, 8.2, 10];
let two = [2, 4, 3.2, 4.6, 5, 12];

const sums = (a, b) => {
  let c = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    c.push((a[i] || 0) + (b[i] || 0));
  }
  return c;
};
console.log(sums(one, two));
const sumArrays = function (arr1, arr2) {
  let result = 0;
  arr1.forEach((num) => {
    result += num;
  });
  arr2.forEach((num) => {
    result += num;
  });
  return result;
};

// // # Bonus
// // Create another version of the above function that can accept
// more than two arrays as the arguments (you don't know the specific
//  number of arguments). Hint - look up 'The arguments object'.
const sumManyArrays = function () {
  let result = 0;
  //   console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].forEach((num) => {
      result += num;
    });
  }
  return result;
};
console.log(sumManyArrays([1, 2, 3, 4], [1, 2, 3, 4], [2, 2, 2]));
// // # Bonus bonus
// // Create another version of the above function that can accept numbers,
// arrays or a combination of the two for any amount of arguments.
