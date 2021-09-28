console.log("IS THIS WORKING ?");
// # Exercises: if/else statements

// ## What number's bigger?

// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs,
// and log the output to make sure it works
// (e.g. "The greater number of 5 and 10 is 10.").

// USE RETURN VALUE AND THE CONCOLE.LOG THE THE FUNCTION......!!!!!!
const greaterNum = function (numOne, numTwo) {
  //   let greates;
  if (numOne > numTwo) {
    console.log(`The greater number of ${numOne} and ${numTwo} is ${numOne}.`);
    return numOne;
  }
};
greaterNum(10, 5);
greaterNum(20, 10);

// Write a function named helloWorld that:
// - takes 1 argument, a
// language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language,
// for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the
// result to make sure it works.

const helloWorld = function (a) {
  let result = "";
  if (a === "es") {
    result = "Hola, Munda!";
  }
  if (a === "de") {
    result = "Hello, Welt!";
  }
  if (a === "en") {
    result = "Hello, World!";
  }
  console.log(result);
};
helloWorld("es");
helloWorld("es");
helloWorld("es");

// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result
// to make sure it works.
const assignGrade = function (grade) {
  let result = "";
  if (grade >= 85) {
    result = "A";
  } else if (grade >= 75) {
    result = "B";
  } else if (grade >= 60) {
    result = "C";
  } else if (grade >= 50) {
    result = "D";
  } else {
    result = "F";
  }
  console.log(`Your grade is ${result}.`);
};
assignGrade(88);
assignGrade(77);
assignGrade(67);
assignGrade(52);
assignGrade(33);
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to
//  make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".
const pluralize = function (noun, number) {
  if (number === 1) {
    return `1 ${noun}`;
  } else {
    return `${number} ${noun}s.`;
  }
};
//   let result = "";
//   if (number > 1) {
//     result = number + " " + noun + "s";
//   } else {
//     result = number + " " + noun;
//   }
//   console.log(result);
// };
console.log(pluralize("cat", 7));
console.log(pluralize("cat", 5));
console.log(pluralize("cat", 1));
