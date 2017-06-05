var wins = 0
var losses = 0
var guessesleft = 9
var guessessofar = 0 

 	document.onkeyup = function(event) {
    

    if((event.keyCode >= '97' || event.keyCode <= '122') {
        var userGuess = event.key;
        ...
    }
    else {
        alert("You can only guess a letter!");
    }
}
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.getElementById("guessesfar").innerHTML += userGuess + " ";

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

		
		
      
       if(userGuess === computerGuess){
       	wins++; 
       	document.getElementById("wins").innerHTML = "Wins: " + wins;
       }
       else (guessesleft--); {
       	document.getElementById("guessesleft").innerHTML = "guessesleft: " + guessesleft;
      }

      if(guessesleft < 1) {
      	losses++;
      	document.getElementById("losses").innerHTML = "losses: " + losses;
}
      	if(guessesleft < 1) {
      	  guessesleft + 9;
      	  document.getElementById("guessesleft").innerHTML = "guessesleft: " + guessesleft;
}
      }       
   
     }