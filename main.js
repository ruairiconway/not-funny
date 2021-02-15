// VARIABLES

const setupDiv = document.querySelector('#setup')
const punchlineDiv = document.querySelector('#punchline')
const punchlineBtn = document.querySelector('#punchlineBtn')
const newJokeBtn = document.querySelector('#newJokeBtn')
let punchline
let setup

// HANDLE
function handlePreviousJoke() {
    setupDiv.innerHTML = ''
    punchlineDiv.innerHTML = ''
}

function handleJoke(joke) {
    setup = joke[0].setup
    punchline = joke[0].punchline
    setupDiv.innerHTML = `<p>${setup}</p>`
    punchlineBtn.addEventListener("click", handlePunchLine)
}

function handlePunchLine() {
    punchlineDiv.innerHTML = `<p>${punchline}</p>`
    punchlineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
    newJokeBtn.addEventListener("click", handleNewJoke)
}

function handleNewJoke() {
    punchlineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
    getJoke()
}

//  API
async function getJoke() {
    handlePreviousJoke()
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke = await jokePromise.json()
    handleJoke(joke)
}

//  ON LOAD
newJokeBtn.classList.add('hidden')
getJoke()