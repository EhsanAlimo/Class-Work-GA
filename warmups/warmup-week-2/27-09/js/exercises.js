console.log("IS THIS WORKING ?");
// Create a function that will translate your input to Pig Latin!
// Move the first letter of each word to the end of it, then add "ay"
// to the end of the word.
// Leave punctuation marks untouched (it's fine to keep the space
// between punctuation marks and the word). Not case sensitive.
// E.g. if your input = "Pig Latin is cool !", your output should
// look like => "igPay atinLay siay oolcay !"
const pigIt = function (str) {
  const result = [];
  const array = str.split(" ");
  for (i = 0; i < array.length; i++) {
    if (array[i].includes("!") || array[i].includes("?")) {
      result.push(array[i]);
    } else {
      const firstChar = array[i].charAt(0);
      const restOfStr = array[i].substr(1);
      let newWord = restOfStr + firstChar + "ay";
      console.log(
        `firstChar: ${firstChar}, restOfStr: ${restOfStr}, ${newWord}`
      );
      result.push(newWord);
      console.log(result);
    }
  }
  return result.join(" ");
};
console.log(pigIt(" Pig Latin is cool  !"));

// function translate(str) {
//   str = str.toLowerCase();
//   var n = str.search(/[aeiuo]/);
//   switch (n) {
//     case 0:
//       str = str + "way";
//       break;
//     case -1:
//       str = str + "ay";
//       break;
//     default:
//       //str= str.substr(n)+str.substr(0,n)+"ay";
//       str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
//       break;
//   }
//   return str;
// }

// console.log(translate("paragraphs"));
