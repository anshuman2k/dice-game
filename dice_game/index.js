var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomDiceImage2);


if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "&#127988 Player1 WINS!!";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "&#127988 Player2 WINS!!";
}
else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
