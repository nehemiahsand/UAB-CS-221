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

// Add event listeners so that when each button is clicked the function below is called with the correct userGuess
document.getElementById("rock-button").addEventListener("click", () => competeWithCpu("rock"));
document.getElementById("paper-button").addEventListener("click", () => competeWithCpu("paper"));
document.getElementById("scissors-button").addEventListener("click", () => competeWithCpu("scissors"));

// Make global variables to store the score
let userWins = 0;
let cpuWins = 0;

// Create a function to see whether the user or CPU wins
function competeWithCpu(userInput) {
    // Generate a random number between 0-2 using the Math.random function
    let cpuRandNum = Math.floor(Math.random() * 3);
    // Call the cpuGuess function to get an actual guess from the CPU
    let cpuInput = cpuGuess(cpuRandNum);
    // Use if elses to check who wins and update the game-output div and global variables accordingly
    if(userInput == cpuInput) {
        document.getElementById("game-output").innerHTML = `User chose: ${userInput}<br>Computer chose: ${cpuInput}<br><b>It's a tie!</b><br><br>You: ${userWins}<br>CPU: ${cpuWins}`;
    }
    else if((userInput == "rock" && cpuInput == "scissors") || (userInput == "paper" && cpuInput == "rock") || (userInput == "scissors" && cpuInput == "paper")) {
        userWins++;
        document.getElementById("game-output").innerHTML = `User chose: ${userInput}<br>Computer chose: ${cpuInput}<br><b>User wins!</b><br><br>You: ${userWins}<br>CPU: ${cpuWins}`;
        
    }
    else {
        cpuWins++;
        document.getElementById("game-output").innerHTML = `User chose: ${userInput}<br>Computer chose: ${cpuInput}<br><b>Computer wins!</b><br><br>You: ${userWins}<br>CPU: ${cpuWins}`;
    }
}