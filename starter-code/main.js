console.log("JS file is connected to HTML! Woo!")
var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

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
