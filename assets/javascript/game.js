      var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"]

      var wins = 0;
      
      var losses = 0;
      
      var guessesleft = 9;
      
      var guessesfar = 0;


		document.onkeyup = function(event) {
			
			var userGuess = event.key;
				
				var computerGuess = options[Math.floor(Math.random() * options.length)];

					if(userGuess === computerGuess)

						wins++;

            if(userGuess == computerGuess) 
            	losses++; guessesleft--;
            }
        }

        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("ties").innerHTML = "losses " + ties;
        document.getElementById("losses").innerHTML = "guessesleft" - guessesleft;
        
        
      };