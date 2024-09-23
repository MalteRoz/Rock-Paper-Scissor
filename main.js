let humanChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

let amountOfRounds = prompt("Hur många rundor vill du spela: ");

if (isNaN(amountOfRounds) || amountOfRounds.trim() === "") {
  alert("Fel Format! Ange ett giltigt nummer.");
  amountOfRounds = prompt("Hur många rundor vill du spela: ");
} else {
  amountOfRounds = parseInt(amountOfRounds);
  alert(`Du har valt att spela ${amountOfRounds} rundor.`);
}

for (let i = 0; i < amountOfRounds; i++) {
  humanChoice = getHumanChoice(
    prompt("Välj mellan Sten, Sax, Påse").toLowerCase()
  );

  //HUMAN CODE
  function getHumanChoice(humanChoice) {
    if (
      humanChoice === "sten" ||
      humanChoice === "sax" ||
      humanChoice === "påse"
    ) {
      return humanChoice;
    } else {
      return getHumanChoice(
        prompt("Ogiltigt val! Välj mellan Sten, Sax, Påse").toLowerCase()
      );
    }
  }

  //COMPUTER CODE
  function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
      return (computerChoice = "sten");
    } else if (num == 1) {
      return (computerChoice = "sax");
    } else {
      return (computerChoice = "påse");
    }
  }

  computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      alert("Ni valde samma, det blir lika");
    } else if (humanChoice === "sten" && computerChoice === "påse") {
      alert("Du förlorar, påse vinner över sten");
      computerScore += 1;
    } else if (humanChoice === "sten" && computerChoice === "sax") {
      alert("Du vinner, sten vinner över sax");
      userScore += 1;
    } else if (humanChoice === "sax" && computerChoice === "sten") {
      alert("Du förlorar, sten vinner över sax");
      computerScore += 1;
    } else if (humanChoice === "sax" && computerChoice === "påse") {
      alert("Du vinner, sax vinner över påse");
      userScore += 1;
    } else if (humanChoice === "påse" && computerChoice === "sax") {
      alert("Du förlorar, sax vinner över påse");
      computerScore += 1;
    } else if (humanChoice === "påse" && computerChoice === "sten") {
      alert("Du vinner, påse vinner över sten");
      userScore += 1;
    }
  }

  console.log("Du valde: " + humanChoice);
  console.log("Datorn valde: " + computerChoice);
  console.log("Användare: " + userScore);
  console.log("Dator: " + computerScore);

}
let winner =
    userScore > computerScore
      ? "Du vann matchen! Slutresultat blev: " + computerScore + " Användare: " + userScore
      : userScore === computerScore 
      ? "Det blev lika. Slutresultat blev: " + computerScore + " Användare: " + userScore
      : "Du förlorade matchen, datorn vann. Slutresultat blev: Dator: " +
        computerScore +
        " Användare: " +
        userScore;

  alert(winner);