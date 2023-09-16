const randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector("#submit")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrhi")
const startover = document.querySelector(".result-area")
const winMessage = document.querySelector(".winMessage")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame)
{
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert("Please enter a number")
    } else if ( guess<1)
    {
        alert("Please enter a number greater than 1")
    }
    else if ( guess>100)
    {
        alert("Please enter a number less than 100")
    }
    else
    {
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            winMessage.innerHTML = `Game Over. Random Number was ${randomNumber}`
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess === randomNumber){
        winMessage.innerHTML = "You won the game!!"
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage("Number is lower than the Random Number")
    }
    else if(guess > randomNumber){
        displayMessage("Number is greater than the Random Number")
    }
}

function displayGuess(guess)
{
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11- numGuess}`
}

function displayMessage(message)
{
    lowOrHi.innerHTML =`${message}`
}

function newGame()
{
    
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    playGame = false
}