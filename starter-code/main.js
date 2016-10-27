var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay=[];

var createCards = function(){
	var gameBoard = document.getElementById('game-board');

	for (i = 0; i < cards.length; i++) {
		var cardDiv = document.createElement('div');
		cardDiv.className = 'card';
		gameBoard.appendChild(cardDiv);
		cardElement.addEventListener('click', isTwoCards);

	}
};

var gameBoard = document.getElementById("game-board");

var createBoard = function(){
	for (var i = 0; i< cards.length; i++){
		var cardElement = document.createElement("div");
		cardElement.className = "card";
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener("click", isTwoCards);
		gameBoard.appendChild(cardElement);
	}
};

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute("data-card"));
	console.log(this.getAttribute("data-card"));
	if(this.getAttribute('data-card') === 'king'){
		this.innerHTML = '<img src="king.png" class = "myImgClass" alt="king" />';
	} 
	else {
		this.innerHTML = '<img src="queen.png" class = "myImgClass" alt="queen" />';
	}

		if (cardsInPlay.length ===2){
			isMatch(cardsInPlay);
			cardsInPlay = []; //clears cards
		}
};



var isMatch = function(cards){
	if(cards[0]===cards[1]){
		alert ("BINGO!");
	}
	else{
		alert ("Nope. Try again");
	}
};



createBoard(); //displays game
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
