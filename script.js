const opponentChoiceDisplay = document.getElementById('opponent')
const userChoiceDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let opponentChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 // 3 possible choices being rock paper and scissors
    if (randomNumber === 1) {
        opponentChoice = 'rock'
    }
    if (randomNumber === 2) {
        opponentChoice = 'scissors'
    }
    if (randomNumber === 3) {
        opponentChoice = 'paper'
    }

    console.log(opponentChoice)
    opponentChoiceDisplay.innerHTML = opponentChoice
}

function getResult() {
    switch (opponentChoice){
        case "rock":{
            if (userChoice.toLowerCase() === 'paper'){
                resultDisplay.innerHTML = 'You Win!'
            } else if (userChoice.toLowerCase() === 'scissors'){
                resultDisplay.innerHTML = 'You Lose!'
            } else {
                resultDisplay.innerHTML = 'It\'s a Draw!'
            }
            break
        }
        case "paper":{
            if (userChoice.toLowerCase() === 'scissors'){
                resultDisplay.innerHTML = 'You Win!'
            } else if (userChoice.toLowerCase() === 'rock'){
                resultDisplay.innerHTML = 'You Lose!'
            } else {
                resultDisplay.innerHTML = 'It\'s a Draw!'
            }
            break
        }
        case "scissors":{
            if (userChoice.toLowerCase() === 'rock'){
                resultDisplay.innerHTML = 'You Win!'
            } else if (userChoice.toLowerCase() === 'paper'){
                resultDisplay.innerHTML = 'You Lose!'
            } else {
                resultDisplay.innerHTML = 'It\'s a Draw!'
            }
            break
        }
    }
}
