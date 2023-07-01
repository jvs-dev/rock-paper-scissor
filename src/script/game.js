let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let score = document.getElementById("score")
let playAgain = document.getElementById("playAgain")
let youSelect = ""
let houseSelect = ""

if (localStorage.score == undefined) {
    localStorage.score = 0
    score.innerHTML = localStorage.score
} else {
    score.innerHTML = localStorage.score
}

scissors.onclick = function () {
    youSelect = "scissor"
    start()
    let youPick = document.getElementById("youPick")
    youPick.innerHTML = `
        <div class="rock-paper-scissors__card card--scissor">
            <div class="rock-paper-scissors__card__img"><img src="images/icon-scissors.svg" alt="scissors"></div>
        </div>`
}

paper.onclick = function () {
    youSelect = "paper"
    start()
    let youPick = document.getElementById("youPick")
    youPick.innerHTML = `
        <div class="rock-paper-scissors__card card--paper">
            <div class="rock-paper-scissors__card__img"><img src="images/icon-paper.svg" alt="paper"></div>
        </div>`
}

rock.onclick = function () {
    youSelect = "rock"
    start()
    let youPick = document.getElementById("youPick")
    youPick.innerHTML = `
        <div class="rock-paper-scissors__card card--rock">
            <div class="rock-paper-scissors__card__img"><img src="images/icon-rock.svg" alt="rock"></div>
        </div>`
}


function start() {
    let rockPaperScissorsTriangle = document.getElementById("rockPaperScissorsTriangle")
    rockPaperScissorsTriangle.classList.add("started")
    setTimeout(() => {
        rockPaperScissorsTriangle.style.display = "none"
        let game = document.getElementById("game")
        game.style.display = "flex"
        setTimeout(() => {
            game.classList.add("active")
            setTimeout(() => {
                showPick()
                housePick()
            }, 500);
        }, 10);
    }, 500);
}

function housePick() {
    let housePick = document.getElementById("housePick")
    let aleatoryNumber = Math.floor(Math.random() * 10 + 1)
    if (aleatoryNumber <= 3) {
        housePick.innerHTML = `<div class="rock-paper-scissors__card card--scissor"><div class="rock-paper-scissors__card__img"><img src="images/icon-scissors.svg" alt="scissors"></div></div>`
        houseSelect = "scissor"
    }
    if (4 <= aleatoryNumber && aleatoryNumber <= 6) {
        housePick.innerHTML = `<div class="rock-paper-scissors__card card--paper"><div class="rock-paper-scissors__card__img"><img src="images/icon-paper.svg" alt="paper"></div></div>`
        houseSelect = "paper"
    }
    if (7 <= aleatoryNumber && aleatoryNumber <= 10) {
        housePick.innerHTML = `<div class="rock-paper-scissors__card card--rock"><div class="rock-paper-scissors__card__img"><img src="images/icon-rock.svg" alt="rock"></div></div>`
        houseSelect = "rock"
    }
    showHousePick()
}

function showPick() {
    let youPick = document.getElementById("youPick")
    youPick.classList.add("active")
}

function showHousePick() {
    let housePick = document.getElementById("housePick")
    setTimeout(() => {
        housePick.classList.add("active")
        compare()
    }, 500);
}

function compare() {
    if (houseSelect == youSelect) {
        draw()
    }
    if (houseSelect == "rock" && youSelect == "scissor") {
        lose()
    }
    if (houseSelect == "rock" && youSelect == "paper") {
        win()
    }
    if (houseSelect == "scissor" && youSelect == "rock") {
        win()
    }
    if (houseSelect == "scissor" && youSelect == "paper") {
        lose()
    }
    if (houseSelect == "paper" && youSelect == "rock") {
        lose()
    }
    if (houseSelect == "paper" && youSelect == "scissor") {
        win()
    }
}

function draw() {
    let resultMessage = document.getElementById("resultMessage")
    let result = document.getElementById("result")
    resultMessage.innerHTML = "draw"
    setTimeout(() => {
        let game = document.getElementById("game")
        game.style.gap = "30vw"
        result.style.display = "flex"
        setTimeout(() => {
            result.classList.add("active")
        }, 500);
    }, 1000);
}

function win() {
    let resultMessage = document.getElementById("resultMessage")
    let result = document.getElementById("result")
    resultMessage.innerHTML = "you win"
    let youPick = document.getElementById("youPick")
    setTimeout(() => {
        youPick.classList.add("win")
        let game = document.getElementById("game")
        game.style.gap = "30vw"
        result.style.display = "flex"
        localStorage.score = Number(localStorage.score) + 1
        score.innerHTML = localStorage.score
        setTimeout(() => {
            result.classList.add("active")
        }, 500);
    }, 1000);
}

function lose() {
    let resultMessage = document.getElementById("resultMessage")
    let result = document.getElementById("result")
    resultMessage.innerHTML = "you lose"
    let housePick = document.getElementById("housePick")
    setTimeout(() => {
        housePick.classList.add("win")
        let game = document.getElementById("game")
        game.style.gap = "30vw"
        result.style.display = "flex"
        localStorage.score = Number(localStorage.score) - 1
        score.innerHTML = localStorage.score
        setTimeout(() => {
            result.classList.add("active")
        }, 500);
    }, 1000);
}


playAgain.onclick = function () {
    let result = document.getElementById("result")
    let game = document.getElementById("game")
    let youPick = document.getElementById("youPick")
    let housePick = document.getElementById("housePick")
    let rockPaperScissorsTriangle = document.getElementById("rockPaperScissorsTriangle")
    game.classList.remove("active")
    setTimeout(() => {
        rockPaperScissorsTriangle.style.display = "flex"
        setTimeout(() => {
            rockPaperScissorsTriangle.classList.remove("started")
        }, 200);
        youPick.classList.remove("active")
        housePick.classList.remove("active")
        youPick.classList.remove("win")
        housePick.classList.remove("win")
        result.classList.remove("active")
        youPick.innerHTML = ""
        housePick.innerHTML = ""
        result.style.display = "none"
        game.style.display = "none"
        game.style.gap = "0px"
    }, 500);
}