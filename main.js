let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const array = ['Rock', 'Paper', 'Scissor']
    const choice = Math.floor(Math.random()*3)
    const upperCase = array[choice].toUpperCase()
    return upperCase
    }

const getPlayerChoice = () => {
    while (true) {
        let choice = prompt('Enter your choice!', '')
        const upperCase = choice.toUpperCase()

        if (choice===null || choice.trim()==='') {
            console.log('Action cancelled, retry.')
            continue
        } else if (upperCase!=='ROCK' && upperCase!=='PAPER' && upperCase!=='SCISSOR') {
            console.log('Invalid input. Try again.')
            continue
        } else return upperCase
    }
}

const getSelection = () => {
    const humanSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    return {human:humanSelection, computer:computerSelection}
}

const playRound = (humanChoice, computerChoice) => {
    console.log(`Player chose ${humanChoice}, Computer chose ${computerChoice}`)
    const winConditions = {'ROCK':'SCISSOR','SCISSOR':'PAPER','PAPER':'ROCK'}
    if (humanChoice === computerChoice) {
        console.log('This round was a tie!')
    } else if (winConditions[humanChoice] === computerChoice) {
        console.log('The player gets the score!')
        humanScore += 1
    } else {
        console.log('The computer gets the score!')
        computerScore += 1
    }
}

const playGame = (n) => {
    humanScore = 0
    computerScore = 0
    for (let i = 0; i < n; i++) {
        const selections = getSelection()
        playRound(selections.human, selections.computer)
    }
    humanScore>computerScore ? console.log(`Player wins with ${humanScore} points!`) : computerScore>humanScore ? console.log (`Computer wins with ${computerScore} points!`) : console.log("It's a tie!")
}

playGame(5)