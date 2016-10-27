console.log("JS file is connected to HTML! Woo!");
var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

var createCards = function(){
	var gameBoard = document.getElementById('game-board');

	for (i = 0; i < 4; i++) {
		var cardDiv = document.createElement('div');
	cardDiv.className = 'card';
	gameBoard.appendChild(cardDiv);
}
};

createCards();
/*
var pickOne;
var pickTwo;

if((pickOne === cardOne || cardTwo) && (pickTwo === cardTwo || cardOne)){
alert("BINGO! You found a match!")
}
else if((pickOne === cardThree || cardTwo) && (pickTwo === cardThree || cardTwo)){
alert("BINGO! You found a match!")
}
else{
alert("Sorry, try again!")
}
*/
