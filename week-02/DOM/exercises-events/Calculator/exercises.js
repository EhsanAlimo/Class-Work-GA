console.log("ucub");
const sqButton = document.getElementById("square-button");
const squarer = function () {
  const squareNumber = document.getElementById("square-input").value;
  let result = squareNumber * squareNumber;
  document.getElementById("solution").innerHTML = result;
};
sqButton.addEventListener("click", squarer);
const halfButton = document.getElementById("half-button");
const half = function () {
  const halfNum = document.getElementById("half-input").value;
  let result = halfNum / 2;
  document.getElementById("solution").innerHTML = result;
};
halfButton.addEventListener("click", half);
