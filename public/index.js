var randomNumber1 = Math.floor((Math.random()*6+1));
var image1source = "images/dice" + randomNumber1 + ".png"
var image1 = document.querySelector(".img1")
image1.setAttribute("src",image1source)

var randomNumber2 = Math.floor((Math.random()*6+1));
var image2source = "images/dice" + randomNumber2 + ".png"
var image2 = document.querySelector(".img2")
image2.setAttribute("src",image2source)

if (randomNumber1>randomNumber2) {document.querySelector("h1").textContent = "🚩Player 1 Wins!"}
else if  (randomNumber1<randomNumber2) {document.querySelector("h1").textContent = "Player 2 Wins!🚩"}
else {document.querySelector("h1").textContent = "Draw!"};
