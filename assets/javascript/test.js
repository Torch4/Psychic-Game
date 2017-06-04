var wins = 0
var losses = 0
var guessesleft = 9
var guessessofar = 0

var userGuess = event.key;

if (userGuess === computerguess)
 wins++;

else if(userguess == computerguess)
	guessesleft--;

if (guessesleft < 0)
	losses++;

if (userguess == computerguess)



        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("Losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesleft").innerHTML = "Guesses Left " + guessesleft;
        document.getElementById("guessessofar").innerHTML = "Guesses So Far " + guessessofar;