const Rock = "rock";
const Paper = "paper";
const Scissor = "scissor";

const randomIndex = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2 (inclusive)
function getComputerChoice(){
    let L=""; 
switch (randomIndex) {
  case 0:
    return Rock; // Output: "Option 1"
    break;
  case 1:
    return Paper; // Output: "Option 2"
    break;
  case 2:
    return Scissor; // Output: "Option 3"
    break;
  default:
    console.error("Invalid random index"); // Handle unexpected errors
}
}
console.log(getComputerChoice()); 
let computerSelection = getComputerChoice()
let playerSelection = prompt("your answer").toLowerCase(); 
let playRound = (playerSelection,computerSelection) => {
    if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
      ) {
        console.log("Player won");
      } else if (playerSelection === computerSelection) {
        console.log("Draw");
      } else {
        console.log("Computer won");
      }
}
playRound(playerSelection,computerSelection); 
