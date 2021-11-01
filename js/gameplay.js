const gameCanvas = document.getElementById('gameCanvas')
const ctx = gameCanvas.getContext('2d')
const scoreBoard = {
    width: gameCanvas.width,
    height: 100
}

const fps = 60
var isGameOver = false

let clonesArr = []
let firstBallsArr = []
let plr = new Player()
const numberOfFirstBall = 3

let ballLeft = numberOfFirstBall

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowDown' || event.key === 's') {
        plr.isMovingDown = false
        clearInterval(gamePlay)
    }
    else if (event.key === 'ArrowUp' || event.key === 'w') {
        plr.isMovingUp = false
    }
    else if (event.key === 'ArrowLeft' || event.key === 'a') {
        plr.isMovingLeft = false
    }
    else if (event.key === 'ArrowRight' || event.key === 'd') {
        plr.isMovingRight = false
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 's') {
        plr.isMovingDown = true
    }
    else if (event.key === 'ArrowUp' || event.key === 'w') {
        plr.isMovingUp = true
    }
    else if (event.key === 'ArrowLeft' || event.key === 'a') {
        plr.isMovingLeft = true
    }
    else if (event.key === 'ArrowRight' || event.key === 'd') {
        plr.isMovingRight = true
    }
})

function drawBoard() {
    ctx.fillStyle = '#2E282A'
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
}
function drawScoreBoard() {
    ctx.fillStyle = '#2E283A'
    ctx.fillRect(0, 800, scoreBoard.width, scoreBoard.height)
}

function makeOriginalBalls() {
    for (let i = 0; i < numberOfFirstBall; i++) {
        firstBallsArr.push(new originalBall())
    }
}
makeOriginalBalls()

function renderOriginalBalls() {
    for (let i = 0; i < firstBallsArr.length; i++) {
        if (!firstBallsArr[i].isEaten) {
            firstBallsArr[i].drawBall()
            firstBallsArr[i].move()
            firstBallsArr[i].checkCollision()
        }
    }
}

function renderClone() {
    for (let i = 0; i < clonesArr.length; i++) {
        clonesArr[i].drawBall()
        clonesArr[i].move()
        clonesArr[i].checkCollision()
    }
}

function renderPlayer() {
    plr.drawPlayer()

    if (plr.isMovingUp) {
        plr.y -= plr.speed
    } else if (plr.isMovingDown) {
        plr.y += plr.speed
    } else if (plr.isMovingLeft) {
        plr.x -= plr.speed
    } else if (plr.isMovingRight) {
        plr.x += plr.speed
    }

    if (plr.x < 0) {
        plr.x = 0
    } else if (plr.x + plr.width > gameCanvas.width) {
        plr.x = gameCanvas.width - plr.width
    } else if (plr.y + plr.height > gameCanvas.height - scoreBoard.height) {
        plr.y = gameCanvas.height - plr.height - scoreBoard.height
    } else if (plr.y < 0) {
        plr.y = 0
    }
}

function drawTimer() {
    ctx.fillStyle = '#CD5334'
    ctx.font = '50px sans-serif'
    ctx.fillText(minutes + ':' + seconds + ':' + ticks, 10, gameCanvas.height - scoreBoard.height / 2 + 25)
}

function drawNumberOfBallLeft() {
    ctx.fillStyle = '#CD5334'
    ctx.font = '50px sans-serif'
    ctx.fillText('Ball left: ' + ballLeft, 570, gameCanvas.height - scoreBoard.height / 2 + 25)
}


function checkGameEnd() {
    if (ballLeft == 0) {
        isGameOver = true
    }

    if (isGameOver && ballLeft == 0) {
        gameEnd('Won')
    } else if (isGameOver && ballLeft > 0) {
        gameEnd('Lost')
    }
}

function gameEnd(msg) {
    clearInterval(game)
    clearInterval(timer)
    ctx.fillStyle = '#CD5334'
    ctx.font = '100px sans-serif'
    ctx.fillText('You ' + msg, 200, gameCanvas.height / 2)

}

function gamePlay() {
    drawBoard()
    drawScoreBoard()
    drawTimer()
    drawNumberOfBallLeft()

    renderOriginalBalls()
    renderClone()
    renderPlayer()

    checkGameEnd()
    drawTimer()
}

let game = setInterval(gamePlay, 1000 / fps)
