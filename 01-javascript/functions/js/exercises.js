console.log("THIS IS WORKING");
// let numKids = 4;
// let parentsName = "Alice";
// let geoLocation = "Sydney";
// let job = "Engineer";
const fortune = function (numKids, parentsName, geoLocation, job) {
  const print = `You will be an ${job} in ${geoLocation}, and married to ${parentsName} with ${numKids} kids.`;
  console.log(print);
};
fortune(7, "gary", "sydney", "engineer");
// fortune();
// fortune();
// fortune();

// const popysAge = 3;
// const myAge = 27;
const calculateDogAge = function (popysAge, humanAge) {
  const convPopyAge = popysAge * 7;
  const convHumanAge = humanAge / 7;
  console.log(
    `Your doggie is ${convPopyAge} years old in dog years! and you are ${convHumanAge} years old in popy's age.`
  );
};
calculateDogAge(10, 70);
calculateDogAge(4, 35);
calculateDogAge(2, 44);

const calculateSupply = function (age, amountPerDay) {
  const maxAge = 99;
  const final = (maxAge - age) * 365.25 * amountPerDay;
  console.log(
    `You will need ${final} to last you until the ripe old age of ${maxAge}`
  );
};
calculateSupply(33, 11);
calculateSupply(30, 11);
calculateSupply(30, 12);

const calcCircumfrence = function (radius) {
  let circum = 2 * radius * Math.PI;
  console.log(`The circumference is ${circum}`);
};
calcCircumfrence(2);

const calcArea = function (radius) {
  let area = Math.PI * radius ** 2;
  console.log(`The area is ${area}`);
};
calcArea(1);
const celsiusToFahrenheit = function (celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius} °C is ${fahrenheit} °F`);
};
celsiusToFahrenheit(17);
