// let randomNumber = parseInt(Math.random() * 100 + 1)
// // console.log(parseInt(Math.random() * 100 + 1))

// const userInput = document.querySelector("#guessField")
// const submit = document.querySelector("#guessSubmit")
// const guessSlot = document.querySelector(".guesses")
// const remainingGuesses = document.querySelector(".lastResult")
// const lowOrHigh = document.querySelector(".lowOrHigh")
// const startOver = document.querySelector(".resultParas")

// const p = document.createElement("p")

// let numGuess = 1

// let playGame = true

// if(playGame){
//     submit.addEventListener("click", (event) => {
//         event.preventDefault()
//         const guess = parseInt(userInput.value)
//         // console.log(guess)
//         validateGuess(guess)
//     })
// }

// function validateGuess(guess){
//     if(isNaN(guess)){
//         alert("Please enter a valid number!")
//     }
//     else if(guess < 1){
//         alert("Please enter a number more than 1")
//     }
//     else if(guess > 100){
//         alert("Please enter a number less than 100")
//     }
//     else {
//         if(numGuess === 11){
//             displayGuess(guess)
//             displayMessage(`Game Over and Random number was ${randomNumber}`)
//             endGame()
//         }
//         else{
//             checkGuess(guess)
//             displayGuess(guess)
//         }
//     }
// }

// function checkGuess(guess){
//     if(guess === randomNumber){
//         displayMessage(`You Guessed The Number`)
//         endGame()
//     }
//     else if (guess < randomNumber){
//         displayMessage(`Number is Low`)
//     }
//     else if (guess > randomNumber){
//         displayMessage(`Number is High`)
//     }
// }

// function displayGuess(guess){
//     userInput.value = ""
//     guessSlot.innerHTML += `${guess}, `
//     numGuess++
//     remainingGuesses.innerHTML = `${11 - numGuess}`
//     if(remainingGuesses.innerHTML < 0){
//         remainingGuesses.innerHTML = `${0}`
//     }
// }

// function displayMessage(message){
//     lowOrHigh.innerHTML = `<div>${message}</div>`
// }

// function endGame(){
//     userInput.value = ""
//     userInput.setAttribute("disabled", "")
//     p.classList.add("button")
//     p.innerHTML = `<div id="newGame">Start New Game</div>`
//     startOver.appendChild(p)
//     playGame = false
//     newGame()
// }

// function newGame(){
//     const newGameButton = document.querySelector("#newGame")
//     newGameButton.addEventListener("click", function(event){
//         randomNumber = parseInt(Math.random() * 100 + 1)
//         numGuess = 1
//         guessSlot.innerHTML = ""
//         remainingGuesses.innerHTML = `${11 - numGuess}`
//         lowOrHigh.innerHTML = ""
//         userInput.removeAttribute("disabled")
//         startOver.removeChild(p)
//         playGame = true
//     })
// }



let randomNumber = parseInt(Math.random() * 100 + 1)
// console.log(parseInt(Math.random() * 100 + 1))

const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#guessSubmit")
const guessSlot = document.querySelector(".guesses")
const remainingGuesses = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", (event) => {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number!")
    }
    else if(guess < 1){
        alert("Please enter a number more than 1")
    }
    else if(guess > 100){
        alert("Please enter a number less than 100")
    }
    else {
        prevGuess = []
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over and Random number was ${randomNumber}`)
            endGame()
        }
        else{
            checkGuess(guess)
            displayGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed The Number`)
        endGame()
    }
    else if (guess < randomNumber){
        displayMessage(`Number is Low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is High`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    prevGuess.forEach( (item) => {
        const number = document.createElement("span")
        number.textContent = `${item},`
        guessSlot.appendChild(number)
    })

    // guessSlot.innerHTML += `${prevGuess[0]},`
    numGuess++
    remainingGuesses.innerHTML = `${11 - numGuess}`
    if(remainingGuesses.innerHTML < 0){
        remainingGuesses.innerHTML = `${0}`
    }
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<div>${message}</div>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<div id="newGame">Start New Game</div>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function(event){
        randomNumber = parseInt(Math.random() * 100 + 1)
        // prevGuess = [] //* write this or not, impact will be same for my code but it good practice to write this code in newGame or in similar type of code
        numGuess = 1
        guessSlot.innerHTML = ""
        remainingGuesses.innerHTML = `${11 - numGuess}`
        lowOrHigh.innerHTML = ""
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
}