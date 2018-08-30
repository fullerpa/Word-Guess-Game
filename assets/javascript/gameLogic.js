$(document).ready(function() {   
   
    // Sets the array of words for the game.
    var wordBank = [
                     "speed", 
                     "blade", 
                     "legend",
                     "krull",
                     "ghost",
                     "inception",
                     "interstellar",
                     "gravity",
                     "sunshine"
                     ];
 
     // creates empty string for the user word
     var computerGenWord = "";
     // creates an array to hold all the user letters guessed
     var lettersInGenWord = [];
     // creates an empty number variable to hold total number of blanks for solution
     var emptyBlanks = 0;
     // creates an empty array to hold the blank spaces and guessed letters
     var blanksAndGuessedLetters = [];
     // creates an empty array to hold the wrongly guessed letter
     var userWrongGuesses = [];
 
     // GAME COUNTER
     var wins = 0;
     var losses = 0;
     var guesses = 9;
 
     // =======\/\/\/ FUNCTIONS FOR GAME LOGIC\/\/\/==========
     function startGame() {
         // startGame by resetting the guesses counter back to 0
         guesses = 9;
 
         // creates the randomly genereated computerChosenWord 
         computerGenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
         // computer generated word is split into individual letters
         lettersInGenWord = computerGenWord.split("");
         // counts the total number of letters and creates blanks to place on page
         emptyBlanks = lettersInGenWord.length;
         // tests the generated word
         console.log(computerGenWord);
 
         // CLEARS OUT EMPTY BLANK ARRAY AT BEGINNING OF GAME
         blanksAndGuessedLetters = [];
         // CLEARS OUT EMPTY USER WRONG GUESS ARRAY
         userWrongGuesses = [];
 
         // Creates for loop to create emptyBlanks.
         for (var i = 0; i < emptyBlanks; i++) {
             blanksAndGuessedLetters.push("_");        
         }
         console.log(blanksAndGuessedLetters);
 
         // reprints on screen the total number of guesses remaining
         document.getElementById("guesses").innerHTML = guesses;
         console.log(guesses);
         // populates the blank spots at beginning of game
         document.getElementById("dashes").innerHTML = blanksAndGuessedLetters.join(" ")
         console.log(blanksAndGuessedLetters);
         // clears the wrong guesses from the previous round
         document.getElementById("lettersGuessed").innerHTML = userWrongGuesses.join(" ");
 
     }
 
 
     function checkLetters(letter) {
         // creates boolean variable to check if the word has letter
         var letterInWord = false;
         
         // creates a for loop to check for any letters in the computer generated word
         for (var i = 0; i < emptyBlanks; i++);
             if (computerGenWord[i] === letter) {
                 // if any letters exists the boolean is set to true and the rest can run
                 letterInWord = true;
             }
         // loops through the newly populated letterInWord
         if (letterInWord) {
             // loops to see where in the array the letters are held
             for (var j = 0; j < emptyBlanks; j++) {
                 // populates with the generated blanks and guessed letters 
                 if (computerGenWord[j] === letter) {
 
                     blanksAndGuessedLetters[j] = letter;
                 }
             }
             console.log(blanksAndGuessedLetters);
         }
 
         else {
             userWrongGuesses.push(letter);
             guesses--;
         }
     }
     
     
 
    //  after every guess this function runs
     function endGame() {
         console.log("Wins: " + wins + " | Losses: " + losses + " | Guesses: " + guesses);
 
             // updates the total number of guesses
             document.getElementById("numberOfGuesses").innerHTML = guesses;
             // updates the total number of dashes to the size of the wordBank array
             document.getElementById("dashes").innerHTML = blanksAndGuessedLetters.join(" ");
             console.log(blanksAndGuessedLetters);
             // updates the wrong letters guessed on the page
             document.getElementById("lettersGuessed").innerHTML = userWrongGuesses.join(" ");
 
 
             // If the user correctly guesses all the words. 
             // They win.
             if (lettersInGenWord.toString() === blanksAndGuessedLetters.toString()) {
                wins++;

                alert("You're a winner!");
 
                 document.getElementById("wins").innerHTML = wins;
                 // starts the game over again
                 startGame();
             }
             else if (guesses === 0) {
                 // updates the total number of losses
                 losses++;
 
                 alert("You're a loser!");
 
                 // updates the loss counter
                 document.getElementById("losses").innerHTML = losses;
                 // starts the game over again
                 startGame();
             }
 
 
     }
 
 
     // runs the startGame function loaded at the top of the code
     startGame();
 
     document.onkeyup = function(event) {
         var lettersGuessed = String.fromCharCode(event.which).toLowerCase();
         checkLetters(lettersGuessed);
         endGame();
     };
 
 });
 
 
 