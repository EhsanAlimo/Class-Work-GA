// ## Warmup - Raindrops

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5 or 7 as a factor, output the number as a string.

// ### Examples

// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

// console.log(`IS THS WORKING`);
// const first = function (num) {
//   let result = "";
//   // let int;
//   if (num % 3 === 0) {
//     result = "pling";
//   }
//   if (num % 5 === 0) {
//     result = result + "plang ";
//   }
//   if (num % 7 === 0) {
//     result = result + "plong ";
//   }
//   if (result ==="") {
//     result = num.toSring();
//   }
//   console.log(result);
// };
// first(28);

const foodForTheWeek = {
  bread: "4.50",
  muffins: "2",
  canOfSprite: "3",
  watermelon: "2.70",
  incense: "6",
  smoothie: "4",
  cashRegister: function () {
    return (
      this.bread +
      this.muffins +
      this.canOfSprite +
      this.watermelon +
      this.incense +
      this.smoothie
    );
  },
};

console.log(foodForTheWeek.cashRegister());
