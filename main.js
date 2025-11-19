let humanScore = 0
let computerScore = 0
let roundToWin = 5

const button = document.querySelectorAll('#btn')
const score = document.querySelector('#score')
const result = document.querySelector('.results')

const updateDisplay = () => {
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`
}

const getComputerChoice = () => {
    const array = ['Rock', 'Paper', 'Scissors']
    const choice = Math.floor(Math.random()*3)
    const upperCase = array[choice].toUpperCase()
    return upperCase
    }

const getPlayerChoice = (event) => {
    return event.currentTarget.className.split(' ')[0].toUpperCase();
}

const playRound = (humanChoice, computerChoice) => {
    result.textContent = ''
    const winConditions = {'ROCK':'SCISSORS','SCISSORS':'PAPER','PAPER':'ROCK'}
    if (humanChoice === computerChoice) {
        result.textContent ='This round was a tie!'
    } else if (winConditions[humanChoice] === computerChoice) {
        result.textContent='The player gets the score!'
        humanScore += 1
    } else {
        result.textContent='The computer gets the score!'
        computerScore += 1
    }
    updateDisplay()
}

const handlePlayerChoice = (event) => {
    if (humanScore >= roundToWin || computerScore >= roundToWin) {
        score.textContent = ''
        humanScore = 0;
        computerScore = 0;
        updateDisplay()
        result.textContent = 'New Game Started!'
        return; 
    }

    const humanSelection = getPlayerChoice(event)
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)

    if (humanScore >= roundToWin) {
        result.textContent = `The Player won the game with ${humanScore} points! Click any button to start a new game.`;
    } else if (computerScore >= roundToWin) {
        result.textContent = `The Computer won the game with ${computerScore} points! Click any button to start a new game.`;
    }
}

button.forEach(pressed => {
    pressed.addEventListener('click', handlePlayerChoice)
});