console.log("Is this working ?");
// Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.
const simon = function (a) {
  if (a[a.length - 1] === "?") {
    return "Sure"; // if(a.endswith("?"))
  } else if (a === "") {
    return "Fine. Be that way!";
  } else if (a === a.toUpperCase()) {
    return "Woah, chill out!";
  } else {
    return "Whatever.";
  }
};

console.log(simon("is this?"));
console.log(simon("HSG JSHS JSJ"));
console.log(simon(""));
console.log(simon("hbchc"));
///// yu shouldnt put uppercase before empty string becuase the empty string
//  will be consider as uppercase.
