var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSoruce = "images/" + randomImage;

var player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src", randomImageSoruce);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won!🎉"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won!🎉"
}
else {
    document.querySelector("h1").innerHTML = "It's a draw!"
}

