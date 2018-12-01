// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
  var message = $("#shoot").val();
  $("#userchoice").text(message);
  
    userChoice = $("#input").val();
  $("#userChoice").text(userChoice);
  
  
  if(randomNumber > 0 && randomNumber<.40){
   $("#computerChoice").text("rock"); 
  }
  else if(randomNumber > .40 && randomNumber < .60){
    $("#computerChoice").text("paper");
  }
  else if(randomNumber> .60 && randomNumber< .99){
    $("#computerChoice").text("scissors");
  }

if(userChoice === computerChoice){
$("#result").text("Tie!");}
else if(userChoice === "paper" && computerChoice === "rock"){
$("#result").text("User Wins!");}

else if(userChoice === "rock" && computerChoice === "scissors"){
  $("#result").text("User Wins");}
  
else if(userChoice === "scissors" && computerChoice === "paper"){
  $("#result").text("User Wins");}

else if(userChoice === "paper" && computerChoice === "scissors"){
  $("#result").text("Computer Wins");}
  
else if(userChoice === "rock" && computerChoice === "paper"){
  $("#result").text("Computer Wins");}

else if(userChoice === "rock" && computerChoice === "scissors"){
  $("#result").text("User Wins");}

$("#input").val("");
$("#computerChoice").val("");
});

var userChoice = "";
var computerChoice= "";
var winner = "";
var randomNumber =Math.random();