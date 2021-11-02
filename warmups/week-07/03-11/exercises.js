console.log("Is working ?");
// Take in an array and return an array of the sums of even and odd numbers. For bonus points, use forEach in your solution.
// evenOddSums([50, 60, 60, 45, 71]); => [170, 116]
// const evenOddSums = function (arr) {
//   let even = 0;
//   let odd = 0;
//
//   //   let tt = arr.split();
//   arr.forEach((element) => {
//     if (element % 2 === 0) {
//       even += element;
//     } else {
//       odd += element;
//     }
//
//
//   });
// return [even, odd];
// };

const evenOddSums = function (arr) {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((number) => {
    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  });
  return [evenSum, oddSum];
};

console.log(evenOddSums([50, 60, 60, 45, 71]));
