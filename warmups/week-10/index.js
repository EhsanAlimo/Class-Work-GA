console.log("Working ?");
// # The Collatz conjecture
// The Collatz conjecture is a conjecture in mathematics named after Lothar Collatz, who first proposed it in 1937. It's also known as the 3n + 1 conjecture, the Ulam conjecture, the Kakutani's problem, the Thwaites conjecture, Hasse's problem or the Syracuse problem, the sequence of numbers that results is referred to as the hailstone numbers or the wondrous numbers.

// The problem is defined as follows:

// ```
// Take any positive integer n. If n is even, divide it by 2 to get n / 2.
// If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
// Repeat the process indefinitely.
// ```
// The conjecture is that no matter what number you start with, you will always eventually reach 1.

// Your aim to create a function that will count how many times it takes for a particular number to reach 1.

// ## Task
// Write a program that given a number, verifies this conjecture for all positive numbers greater than one. Ideally your program will output when it has completed, how many cycles it ran for and all the steps it took to reach the end.

// Examples to verify your program can be found https://en.wikipedia.org/wiki/Collatz_conjecture.

// const conjecture = function (num) {
//   let result = 0;
//   let resultArray = [];
//   if (num % 2 === 0) {
//     result = num / 2;
//     resultArray.push(result);
//   } else if (num % 2 !== 0) {
//     result = num * 3 + 1;
//     resultArray.push(result);
//   }
//   return resultArray;
// };
// console.log(conjecture());
const conjecture = function (n) {
  let c = 0;
  while (n > 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;
    c++;
  }
  return c;
};
console.log(conjecture(12));

// /BONOUS???/ rewrite your prrogram so it runs resursively ///

const collatz = function (num, count = 0) {
  //base case
  if (num === 1) {
    console.log(`the final count is ${count}`);
    return count;
  }
  //action
  //even
  if (num % 2 === 0) {
    return collatz(num / 2, count + 1);
  } else {
    return collatz(num * 3 + 1, count + 1);
  }
};
console.log(collatz(12));
