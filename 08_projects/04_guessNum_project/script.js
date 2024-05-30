let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// let prevGess = []
let numGuess = 0
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert(`please enter a valid number`)
    } else if(guess < 1 || guess >  100  ){
        alert(`please enter number between 1 to 100`)
    } else {
        // prevGess.push(guess)
        guessSlot.innerHTML += `${guess},`
        if (numGuess === 6) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
       
    }
}

function checkGuess(guess) {
    if (guess > randomNumber) {
        displayMessage(`the number is too big`)
    } else if(guess < randomNumber) {
        displayMessage(`the number is too low`)
    }else {
        displayMessage(`Congrats, your guess is right`)
        endGame()
    }
}

function displayGuess(guess) {
    userInput.value = ''
    // guessSlot.innerHTML += `${guess},`
    numGuess++
    console.log(numGuess);
    remaining.innerHTML = `${7 - numGuess }`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<span class="displayMessage">${message} </span>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<span id="start-game-bt"> Start new game </span>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('.button')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        // prevGess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${7 - numGuess }`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML = ''
        playGame = true

    })
   
}

