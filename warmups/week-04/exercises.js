console.log("IS THIS WORKING ?");
// # Allergies Warmup

// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)

// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
// If Mary has a score of 17, she must be allergic to tomatoes and eggs, but not peanuts or shellfish.

// Now, given just that score of 34, your program should be able to say:

// - Whether Tom is allergic to any one of those allergens listed above.//////IT IS HAAAAAAAARDDDDDDDDD
// - All the allergens Tom is allergic to./////IT IS HAAAAAAAARDDDDDDDDD

// scorecard:
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats"
const allergyScore = function (num) {
  const scorecard = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats",
  };

  const allergies = [];

  const scores = Object.keys(scorecard);
  // console.log(scores); // array of keys

  if (num === 0) {
    return "Good news! No allergies";
  } else {
    // loop through the scores and check if the number is greater than the score => subtract the num
    for (let i = scores.length - 1; i >= 0; i--) {
      let score = scores[i];
      if (num >= score) {
        allergies.push(scorecard[score]);
        num -= scores[i];
      }
    }
  }
  return `Here is the list of allergies: ${allergies.join(", ")}`;
};
//////SECOND SOLUTION IS BELOW>>>>>>>>>>>>>>>>>>>>>>>>

// const scorecard = {
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats",
// };
// const allergyScore = function (num) {
//   const score = Object.keys(scorecard);
//   // console.log(score);
//   const alergies = [];
//   for (i = 0; i < score.length; i++) {
//     if (parseInt(score[i]) === num) {
//       alergies.push(score[i]);
//       // return `Here is the list of allergies: ${alergies.join(", ")}`;
//     }
//     for (j = 0; j < score.length; j++) {
//       if (
//         parseInt(score[i]) + parseInt(score[j]) === num &&
//         score[i] != score[j] &&
//         alergies.indexOf(score[i]) === -1
//       ) {
//         alergies.push(score[i]);
//         alergies.push(score[j]);
//         // console.log(score[i]);
//         // console.log(score[j]);
//       }
//     }
//   }
//   let alergieString = "";
//   for (i = 0; i < alergies.length; i++) {
//     alergieString += scorecard[parseInt(alergies[i])] + ", ";
//   }
//   // const distincAlergies = alergies.filter(distinct);
//   return `Here is the list of allergies: ${alergieString.slice(
//     0,
//     alergieString.length - 2
//   )}`;
// };
console.log(allergyScore(16));
console.log(allergyScore(34));
console.log(allergyScore(17));
