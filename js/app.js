$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });


    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    /*--- Added sections below ---*/

  	x = numberGenerator();
    $("#guessButton").click(function (e) {

      var value = parseInt($("#count").text()) + 1;
      $("#count").text(value);


      $("#guessList").append("<li>" + $("#userGuess").val() + "</li>");

      var guess = document.getElementById("feedback");
      var guessText = document.getElementById("userGuess");
      
      if ($('#userGuess').val() == x) {
        $("#feedback").text('Success!');
        guess.style.backgroundColor = "#FF0000";
        $("guessButton").off(e);
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 50 ) {
         guess.style.color = "white";
         guessText.value = "";
        $("#feedback").text('Ice cold');
        guess.style.backgroundColor = "#000033";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 30 && Math.abs(($('#userGuess').val() - x)) < 50) {
        $("#feedback").text('Cold');
         guessText.value = "";
         guess.style.backgroundColor = "#0000FF";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 20 && Math.abs(($('#userGuess').val() - x)) < 30) {
         guess.style.color = "black";
         guessText.value = "";
        $("#feedback").text('Warm');
         guess.style.backgroundColor = "#FFFF00";  
         guessText.value = "";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 10 && Math.abs(($('#userGuess').val() - x)) < 20) {
        $("#feedback").text('Hot');
        guess.style.backgroundColor = "#FF6600"; 
        guessText.value = "";
      }
        else {
        $("#feedback").text('Very hot');
        guess.style.backgroundColor = "#FF3300";
        guessText.val = "";
      }
    });

    //$("#guessButton").click(function () {
    $('input[type=number]').on('keyup', function (e) {
      if (e.which == 13) {

      var value = parseInt($("#count").text()) + 1;
      $("#count").text(value);


      $("#guessList").append("<li>" + $("#userGuess").val() + "</li>");
      var guess = document.getElementById("feedback")
      var guessText = document.getElementById("userGuess")
      if ($('#userGuess').val() == x) {
        $("#feedback").text('Success!');
        guess.style.backgroundColor = "#FF0000";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 50 ) {
         guess.style.color = "white";
        $("#feedback").text('Ice cold');
        guess.style.backgroundColor = "#000033";
        guessText.value = "";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 30 && Math.abs(($('#userGuess').val() - x)) < 50) {
        $("#feedback").text('Cold');
        guess.style.backgroundColor = "#0000FF";
        guessText.value = "";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 20 && Math.abs(($('#userGuess').val() - x)) < 30) {
        guess.style.color = "black";
        $("#feedback").text('Warm');
        guess.style.backgroundColor = "#FFFF00"; 
        guessText.value = ""; 
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 10 && Math.abs(($('#userGuess').val() - x)) < 20) {
        $("#feedback").text('Hot');
        guess.style.backgroundColor = "#FF6600";
        guessText.value = ""; 
      }
        else {
        $("#feedback").text('Very hot');
        guess.style.backgroundColor = "#FF3300";
        guessText.value = "";
      }
    }});

    console.log($("#count").val())

  /*--- generation of random integer ---*/
    
    function numberGenerator() {
    	return correctNum = Math.floor((Math.random() * 100) + 1); 
      } /*returns a number from 1-100, inclusive */
      
		console.log(x)


    /*--- generation of new game --- */
    $('.new').click(function () {
      location.reload();
    }) 

    /*--- user's guess section --- */
    
});


