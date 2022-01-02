// const bodyStyle = document.body;
// bodyStyle.style.fontFamily = "Arial, sans-serif";
$("body").css("font-family", "Arial, sans-serif");
// let nicName = document.getElementById("nickname");
// nicName.innerHTML = "Essi";
const $nickName = $("#nickname");
$nickName.innerHTML("Essi");
// document.getElementById("favorites").innerHTML = "Snooker";
// document.getElementById("hometown").innerHTML = "Rasht";
$("#favorites").html("cheescake");
$("#hometown").text("rasht");

let list = document.getElementsByTagName("li");
for (i = 0; i < list.length; i++) {
  list[i].className = "listitem";
}
const image = document.createElement("img");
image.src = "http://www.fillmurray.com/250/400";
document.body.appendChild(image);
