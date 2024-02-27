const computerChoicedisplay = document.getElementById('Computer-choice')
const userchoicedisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('Result')
const possibleChoice = document.querySelectorAll('button')
let userchoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userchoice = e.target.id 
    userchoicedisplay.innerHTML = userchoice
    generatecomputerchoice()
    getResult()
}))

function generatecomputerchoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    // Use switch statement for cleaner code
    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    computerChoicedisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice === userchoice)
    {
        result = "It's a draw!";
    }
    else if (
        (computerChoice === 'rock' && userchoice === 'scissors') ||
        (computerChoice === 'paper' && userchoice === 'rock') ||
        (computerChoice === 'scissors' && userchoice === 'paper')
    ) {
        result = "You lost!";
    }
    else {
        result = "You win!";
    }
    resultDisplay.innerHTML = result;
}
