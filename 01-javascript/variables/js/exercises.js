console.log('is this working ?');
let numberOfChildren = 2;
let momName = "Nana";
let dadName = "Alex";
let job = "Engineer";
let locat = "West";
//  console.log("You will be an "+ job + " in"+ locat + ", and married to "+ momName + " with " + numberOfChildren + " kids.")
let fortune = `You will be an ${job} in ${locat}, and married to ${ momName} with ${numberOfChildren} kids.`;
console.log(fortune);

 let year = 2021;
let boyDateOfBirth = 2017;
let girlDateOfBirth = 2012;
let boyAge = year - boyDateOfBirth;
let girlAge = year - girlDateOfBirth;
// console.log("They are either " + boyAge + " or " + girlAge);
let age = `They are either ${boyAge} or ${girlAge}`;
console.log(age);

//life time suppl
let myAge = 29;
let maxAge = 82;
let amountDaily = 12;
let total = (maxAge - myAge)*365.25*12;
let final = `You will need ${total} $ to last you untill the ripe old age of ${maxAge}.`
console.log(final);

let radius = 1;
let pi = 3.14;
let circumference = 2 * radius * Math.PI;
let cir = `The circumference is ${circumference}.`
console.log(cir);
let area = pi * radius**2; // or pi  * radius * radius 
let areaFinal = `The area is ${area}`;
console.log(areaFinal);


let celsius = 17;
let farha1  = celsius/5;
let farha2 = farha1*9;
let farh = farha2 + 32;
console.log(`${celsius} °C is ${farh} °F`);

