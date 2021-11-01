console.log("Hello World!!");
// Arrays - Flatten and Reverse

// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.

// Make two functions:
// - reverse
// - flatten

// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]

// -----------------------------
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]

// -----------------------------
// Bonus
// Make one that flattens any array that you pass into it: ["Hello", [[["World"], 42]]] -> [ "Hello", "World", 42 ]
const re = function (array) {
  return array.reverse();
};
let x = [1, 2, 3, 4];
// console.log(re(x));
// console.log(x.reverse());
const reverseArr = function (input) {
  let ret = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
};
console.log(reverseArr([4, 3, 2, 1]));
//////////stack OVERFLOW/////////////////////
const arrays = [["$6"], [["$12"]], ["$25"], ["$25"], ["$18"], ["$22"], ["$10"]];
const merge3 = arrays.flat(2); //The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
const flattern = function (array) {
  let flatArray = [];
  array.array.forEach((element) => {
    console.log("Element: " + element);
    if (Array.isArray(element)) {
      let flattern = element.flat();
      flatArray.push(flattern);
    } else {
    }
  });
};
///CHECK THE ANSWER//////
