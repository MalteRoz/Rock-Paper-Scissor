let humanChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let amountOfRounds;
let roundCounter = 0;


//Visar värdet på sliden
let slider = document.querySelector('.slider');
let sliderValue = document.querySelector('.value');

sliderValue.textContent = slider.value;

slider.addEventListener('input', (e) => {
  let roundSliderValue = e.target.value;
  sliderValue.textContent = roundSliderValue;

});

// Startknapp - Hämta antal rundor
const startBtn = document.querySelector('.start')
const lockedScreen = document.querySelector('.locked-container')
const tooltiptext = document.querySelector('.tooltiptext')
const tooltip = document.querySelector('.tooltip')

startBtn.addEventListener('click', () => {
  amountOfRounds = Number(slider.value);
  console.log(`Antal rundor: ${amountOfRounds}`);
  lockedScreen.classList.remove('lockedGame')
  tooltiptext.textContent = '';
  tooltip.classList.remove('tooltip')
  //enablePlayBoard()
  //opacity osv 
})


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

function displayComputerChoice(computerChoice) {
  if (computerChoice === 'rock') {
    return computerDisplay.src = "images/rock.png";
  }
  else if (computerChoice === 'paper') {
    return computerDisplay.src = "images/paper.png";
  }
  else if (computerChoice === 'scissor') {
    return computerDisplay.src = "images/scissors.png";
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

  startCountdown(3, () => {
    playRound(humanChoice, computerChoice);
    humanDisplay.src = "images/rock.png";
  });
  
})

paper.addEventListener('click', () => {
  humanChoice = 'paper';

  startCountdown(3, () => {
    playRound(humanChoice, computerChoice);
    humanDisplay.src = "images/paper.png";
  });

})

scissor.addEventListener('click', () => {
  humanChoice = 'scissor';


  startCountdown(3, () => {
    playRound(humanChoice, computerChoice);
    humanDisplay.src = "images/scissors.png";
  });
})

//PLAY ROUND
let playerStats = document.querySelector('.playerStats')
let compStats = document.querySelector('.compStats')
let startTag = document.querySelector('.start-tag')
let roundPara = document.querySelector('.roundPara')

function playRound(humanChoice) {

  if (roundCounter < amountOfRounds) {
    computerChoice = getComputerChoice();
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

    displayComputerChoice(computerChoice); 

    if (humanChoice === computerChoice) {
      startTag.textContent = 'DRAW!';
      
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      startTag.textContent = 'YOU LOSE! PAPER BEATS ROCK!'; 
      computerScore += 1;
      compStats.textContent = `Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      startTag.textContent = 'YOU WIN! ROCK BEATS SCISSOR!';
      userScore += 1;
      playerStats.textContent = `Player: ${userScore} `
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      startTag.textContent = 'YOU LOSE! ROCK BEATS SCISSOR!';
      computerScore += 1;
      compStats.textContent = `Computer: ${computerScore}`
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      startTag.textContent = 'YOU WIN! SCISSOR BEATS PAPER!';
      userScore += 1;
      playerStats.textContent = `Player: ${userScore} `
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      startTag.textContent = 'YOU LOSE! SCISSOR BEATS PAPER!';
      computerScore += 1;
      compStats.textContent = `Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      startTag.textContent = 'YOU WIN! PAPER BEATS ROCK!';
      userScore += 1;
      playerStats.textContent = `Player: ${userScore} `
    }

    roundCounter++;
    roundPara.textContent = `Round: ${roundCounter}`
    if (roundCounter >= amountOfRounds) {
      setTimeout(() => {
        announceWinner();  
      }, 250);  
    }
  }
}

function announceWinner() {
  if (userScore > computerScore) {
    alert(`You won the match! Final score: ${userScore} - ${computerScore}`);
  } else if (userScore < computerScore) {
    alert(`The computer won the match! Final score: ${userScore} - ${computerScore}`);
  } else {
    alert(`It's a draw! Final score: ${userScore} - ${computerScore}`);
  }

  
  
  //Score & Roundcounter
  roundCounter = 0;
  userScore = 0;
  computerScore = 0;

  //Text back to default dislay 
  startTag.textContent = 'Lets Play!';
  roundPara.textContent = 'Round: '
  playerStats.textContent= 'Player: '
  compStats.textContent= 'Computer: '

  //IMG and Div back to default dislay 
  lockedScreen.classList.add('lockedGame')
  computerDisplay.src = "images/rock.png"
  humanDisplay.src = "images/rock.png";

  //toolTip
  tooltiptext.textContent = 'Choose Amount of Rounds';
  tooltip.classList.add('tooltip')
}


function startCountdown(seconds, callback) {
  let counter = seconds;

  const interval = setInterval(() => {
    startTag.textContent = counter;
    console.log(counter);
    if (counter <= 0 ) {
      clearInterval(interval);
      if (callback) callback();
    }
    counter--;
  }, 750);
}




