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
  $("#userchoice").text(userChoice);
  if(randomNumber > 0 && randomNumber<.40){
   $("#computerchoice").text("rock"); 
  }
  else if(randomNumber > .40 && randomNumber < .60){
    $("#computerchoice").text("paper");
  }
  else if(randomNumber> .60 && randomNumber< .99){
    $("#computerchoice").text("scissors");
  }

});

var userChoice = "";
var computerChoice= "";
var winner = "";
var randomNumber = math.Random;