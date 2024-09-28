
// let amountOfRounds = prompt("Hur många rundor vill du spela: ");

// if (isNaN(amountOfRounds) || amountOfRounds.trim() === "") {
//   alert("Fel Format! Ange ett giltigt nummer.");
//   amountOfRounds = prompt("Hur många rundor vill du spela: ");
// } else {
//   amountOfRounds = parseInt(amountOfRounds);
//   alert(`Du har valt att spela ${amountOfRounds} rundor.`);
// }

// for (let i = 0; i < amountOfRounds; i++) 
//   humanChoice = getHumanChoice(
//     prompt("Välj mellan Sten, Sax, Påse").toLowerCase()
//   );

//   //HUMAN CODE
//   function getHumanChoice(humanChoice) {
//     if (
//       humanChoice === "sten" ||
//       humanChoice === "sax" ||
//       humanChoice === "påse"
//     ) {
//       return humanChoice;
//     } else {
//       return getHumanChoice(
//         prompt("Ogiltigt val! Välj mellan Sten, Sax, Påse").toLowerCase()
//       );
//     }
//   }

let humanChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;


//COMPUTER CODE
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return (computerChoice = "rock");
  } else if (num == 1) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissor");
  }
}

function displayComputerChoice (computerChoice) {
    if (computerChoice === 'rock' ) {
      return computerDisplay.src = "images/rock.png";
    }
    else if (computerChoice === 'paper') {
      return  computerDisplay.src = "images/paper.png";
    }
    else if (computerChoice === 'scissor') {
      return  computerDisplay.src = "images/scissors.png";
    }
}
computerChoice = getComputerChoice();


//HUMAN CODE
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

let elementsR = rock.querySelectorAll('img, h2');
let elementsP = paper.querySelectorAll('img, h2');
let elementsS = scissor.querySelectorAll('img, h2');

let humanDisplay = document.querySelector('.left')
let computerDisplay = document.querySelector('.right')

rock.addEventListener('click', () => {
  humanChoice = 'rock';
  
  humanDisplay.src = "images/rock.png";


  // elementsR.forEach(element => {
  //   element.style.opacity = 1;
  // });

  playRound(humanChoice, computerChoice);
})

paper.addEventListener('click', () => {
  humanChoice = 'paper';

  humanDisplay.src = "images/paper.png";

  playRound(humanChoice, computerChoice);
})

scissor.addEventListener('click', () => {
  humanChoice = 'scissor';

  humanDisplay.src = "images/scissors.png";

  playRound(humanChoice, computerChoice);
})

//PLAY ROUND

let startTag = document.querySelector('.start-tag')

function playRound(humanChoice) {
  computerChoice = getComputerChoice(); 
  console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

  displayComputerChoice(computerChoice); // Skicka in datorns val

  if (humanChoice === computerChoice) {
    startTag.textContent = 'DRAW!';
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    startTag.textContent = 'YOU LOSE! PAPER BEATS ROCK!';
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    startTag.textContent = 'YOU WIN! ROCK BEATS SCISSOR!';
    userScore += 1;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    startTag.textContent = 'YOU LOSE! ROCK BEATS SCISSOR!';
    computerScore += 1;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    startTag.textContent = 'YOU WIN! SCISSOR BEATS PAPER!';
    userScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    startTag.textContent = 'YOU LOSE! SCISSOR BEATS PAPER!';
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    startTag.textContent = 'YOU WIN! PAPER BEATS ROCK!';
    userScore += 1;
  }
}



console.log("Du valde: " + humanChoice);
console.log("Datorn valde: " + computerChoice);
console.log("Användare: " + userScore);
console.log("Dator: " + computerScore);


// let winner =
//   userScore > computerScore
//     ? "Du vann matchen! Slutresultat blev: " + computerScore + " Användare: " + userScore
//     : userScore === computerScore
//       ? "Det blev lika. Slutresultat blev: " + computerScore + " Användare: " + userScore
//       : "Du förlorade matchen, datorn vann. Slutresultat blev: Dator: " +
//       computerScore +
//       " Användare: " +
//       userScore;

alert(winner);


