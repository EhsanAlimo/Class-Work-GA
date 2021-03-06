console.log("working ?");
// Given a number, return a string with dash '-' marks before and after each odd integer, but do not begin or end the string with a dash mark.

// -----------------
// Tests:

// dashatize(274), "2-7-4", "Should return 2-7-4");

// dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");

// dashatize(86320), "86-3-20", "Should return 86-3-20");

// dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");

// dashatize(NaN), "NaN", "Should return NaN");

// dashatize(0), "0", "Should return 0");

// dashatize(-1), "1", "Should return 1");

// dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");

////THIS WARMUP IS IMPORTANT AND HAVE GOOD REAL LIFE APPLICATION///////////////

const dashatize = function (numbers) {
  if (isNaN(numbers)) {
    return numbers;
  }
  let numArray = numbers.toString().split("");
  let result = "";
  //   console.log(numArray);
  for (let i = 0; i < numArray.length; i++) {
    if (Number(numArray[i]) % 2 !== 0) {
      result += "-";
      result += numArray[i];
      result += "-";
    } else {
      result = numArray[i];
    }
  }
  result = result.replace(/--/g, "-");

  if (result.startsWith("-")) {
    result = result.substr(1);
  }
  if (result.endsWith("-")) {
    result = result.substr(0, result.length - 1);
  }

  console.log(result);
};

dashatize(86320);
/////////check the solution for warmups//////////
