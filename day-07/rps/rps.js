function rockPaperScissorGame() {
    console.log("Welcome to Rock, Paper, Scissors!");
    const userChoicePrompt = prompt("Enter your choice (rock, paper, scissors): ");
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // if (randomNumber === 1) {
    //     computerChoice = "rock";
    // } else if (randomNumber === 2) {
    //     computerChoice = "paper";
    // } else {
    //     computerChoice = "scissors";
    // }
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            console.log("Invalid random number generated.");
    }

    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice);
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    }
    else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
    ) {
        console.log("Computer wins!");
    } else if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
    } ;  
    
    const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)")
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes") {
        rockPaperScissorsGame();
    } else {
        console.log("Thanks for Playing! See you Next Time")
    }
    
}

rockPaperScissorGame();