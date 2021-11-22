console.log("working ?");
// Prime Factors
// A prime number is any number greater than one that is only divisible by itself.
// 1 is not a prime number (it is not greater than 1).
// 2 is a prime number (it is greater than one and is only evenly divisible by itself and 1).
// 3 is a prime number (as above).
// 4 is not a prime number (it is evenly divisible by 2). The prime factors of an integer are the set of prime numbers that will divide the integer exactly.

// -------------
// Example
// What are the prime factors of 60?
// 1 is not a prime number.
// 2 is a prime number. 60 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 30.
// 30 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 15.
// 15 is not evenly divisible by 2.
// 3 is the next prime number. 15 is evenly divisible by 3 (therefore 3 is a prime factor of 60), and leaves 5.
// 4 is not a prime number.
// 5 is a prime number. 5 is evenly divisible by 5 (therefore 5 is a prime factor of 60), and leaves 1.
// When we get to 1, we're done.
// The prime factors of 60 are 2, 2, 3, 5 You can check this yourself:
// 2 * 2 * 3 * 5
// = 60
// Success!

// -------------
// YOUR TASK
// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.

// -------------
// BONUS
// Do it with recursion

// Some more examples of how to find prime factors
// mesacc.edu

const prime = function (num) {
  const factor = [];
  let divisor = 2;
  while (num >= 2) {
    if (num % divisor === 0) {
      factor.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return factor;
};
console.log(prime(60));

//////recursion solution /////////

const recprime = function (num, factor = []) {
  let divisor = 2;
  while (num >= 2) {
    if (num % divisor === 0) {
      factor.push(divisor);
      let newNum = num / divisor;
      return recprime(newNum, factor);
    } else {
      divisor++;
    }
  }
  return factor;
};
console.log(recprime(60));
