const maxNumber = 10; // Maximum number for the secret number
const minNumber = 1; // Minimum number for the secret number


function secretNumberGame() {
  console.log("Welcome to the Secret Number Game!");
  let secretNumber = Math.floor(Math.random() * maxNumber) + 1; // Generate a random number between 1 and 10
  let attempts = 0; 
  let guess = null;   

    // Loop until the user guesses the correct number
  while (guess !== secretNumber) { 
    const guessPrompt = prompt(`Guess a number between ${minNumber} and ${maxNumber}:`); 
    guess = parseInt(guessPrompt); 
    attempts++; 
    
    if (guess < minNumber || guess > maxNumber) { 
      console.log(`Please enter a number between ${minNumber} and ${maxNumber}.`);
    } else if (isNaN(guess)) { 
      console.log("That's not a valid number. Please try again.");
    } else if (guess < secretNumber) { 
      console.log("Too low! Try again.");
    } else if (guess > secretNumber) { 
      console.log("Too high! Try again.");
    } else { 
      console.log(`Congratulations! You've guessed the secret number ${secretNumber} in ${attempts} attempts.`);
    }   
  }
    // Prompt user to play again
    console.log("Would you like to play again? (yes/no)"); 
    const playAgain = prompt(); 
    if (playAgain.toLowerCase() === "yes") { 
      secretNumberGame(); 
    } else {
      console.log("Goodbye!"); 
    }   

}

secretNumberGame();