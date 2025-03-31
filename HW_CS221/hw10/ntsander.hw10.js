// Create a function to generate the CPU's guess using an index from 0-2
function cpuGuess(randNum) {
    // Create an if statement to return a guess depending on the randNum
    if(randNum == 0) {
        return "rock";
    }
    else if (randNum == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Create a function to get a guess from the user
function getUserInput() {
    // Prompt the user for input and turn it to lowercase
    let userInput = prompt("Please enter your choice: Rock, Paper, or Scissors. ").toLocaleLowerCase();
    // Check if the input is valid
    while(userInput != "rock" && userInput != "paper" && userInput != "scissors") {
        // If it is not valid tell the user and have them try again
        alert("You did not enter a valid choice. Try again.");
        userInput = prompt("Please enter your choice: Rock, Paper, or Scissors. ");
    }
    // Return the correctly formatted user input
    return userInput;
}

// Create a function to see whether the user or CPU wins
function competeWithCpu(userInput) {
    // Generate a random number between 0-2 using the Math.random function
    let cpuRandNum = Math.floor(Math.random() * 3);
    // Call the cpuGuess function to get an actual guess from the CPU
    let cpuInput = cpuGuess(cpuRandNum);
    // Use if elses to check who wins
    if(userInput == cpuInput) {
        console.log(`User chose: ${userInput}\nComputer chose: ${cpuInput}\nIt's a tie!`);
    }
    else if((userInput == "rock" && cpuInput == "scissors") || (userInput == "paper" && cpuInput == "rock") || (userInput == "scissors" && cpuInput == "paper")) {
        console.log(`User chose: ${userInput}\nComputer chose: ${cpuInput}\nUser wins!`);
        
    }
    else {
        console.log(`User chose: ${userInput}\nComputer chose: ${cpuInput}\nComputer wins!`);
    }
}

// Create a function to call all the other functions and run the program
function main() {
    // Get input from the user
    let userInput = getUserInput();
    // Check who won
    competeWithCpu(userInput);
    // Ask the user if they want to play again
    while(confirm("Do you want to play again?")) {
        getUserInput();
        competeWithCpu(userInput);
    }
}

// Initialize the program
main();