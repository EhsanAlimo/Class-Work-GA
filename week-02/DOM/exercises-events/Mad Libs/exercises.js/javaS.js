const button = document.getElementById("lib-button");
const firstNoun = function () {
  const nOun = document.getElementById("noun").value;

  const adj = document.getElementById("adjective").value;

  const person = document.getElementById("person").value;

  const story = `${nOun} realy likes ${adj} ${person}`;
  document.getElementById("story").innerHTML = story;
};
button.addEventListener("click", firstNoun);
