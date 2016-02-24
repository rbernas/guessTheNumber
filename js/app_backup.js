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
    $("#guessButton").click(function () {

      var value = parseInt($("#count").text()) + 1;
      $("#count").text(value);


      $("#guessList").append("<li>" + $("#userGuess").val() + "</li>");

      if ($('#userGuess').val() == x) {
        $("#feedback").text('Success!');
        document.getElementById("feedback").style.backgroundColor="#FF0000";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 50 ) {
         document.getElementById("feedback").style.color="white";
        $("#feedback").text('Ice cold');

        document.getElementById("feedback").style.backgroundColor="#000033";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 30 && Math.abs(($('#userGuess').val() - x)) < 50) {
        $("#feedback").text('Cold');
        document.getElementById("feedback").style.backgroundColor="#0000FF";
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 20 && Math.abs(($('#userGuess').val() - x)) < 30) {
        document.getElementById("feedback").style.color="black";
        $("#feedback").text('Warm');
        document.getElementById("feedback").style.backgroundColor="#FFFF00";  
      } else if ( Math.abs(($('#userGuess').val() - x)) >= 10 && Math.abs(($('#userGuess').val() - x)) < 20) {
        $("#feedback").text('Hot');
        document.getElementById("feedback").style.backgroundColor="#FF6600"; 
      }
        else {
        $("#feedback").text('Very hot');
        document.getElementById("feedback").style.backgroundColor="#FF3300";
      }
    });

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


