const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time-left")
let score = document.querySelector("#score")

let result = 0 
let currenTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove("mole")
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add("mole")


    // assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener("mouseup", () => {
        if(id.id === hitPosition) {
            result = result + 1 
            score.textContent = result
            hitPosition = null
        }
    })
})


function moveMole () {
    let timerId = null 
    timerId = setInterval(randomSquare,500)
}

moveMole()

function countDown () {
    currenTime--
    timeLeft.textContent = currenTime;

    if(currenTime === 0) {
        clearInterval(timerId)
        alert("Game Over your final result is" + result)
    }
}

let timerId = setInterval(countDown,1000)