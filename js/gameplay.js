//tao khung hinh
const gameCanvas = document.getElementById('gameCanvas')
const ctx = gameCanvas.getContext('2d')
const scoreBoard = {
    width: gameCanvas.width,
    height: 100
}

//toc do khung hinh
const fps = 60

//trang thai game
var isGameOver = false

//tao bong, nhan ban, nguoi choi
let clonesArr = []
let firstBallsArr = []
let plr = new Player()
const numberOfFirstBall = 3

//so luong bong con lai
let ballLeft = numberOfFirstBall

//so luong nhan ban con lai
let cloneLeft = 0

//tao bong
function makeOriginalBalls() {
    for (let i = 0; i < numberOfFirstBall; i++) {
        firstBallsArr.push(new originalBall())
    }
}
makeOriginalBalls()

//ve bong
function renderOriginalBalls() {
    for (let i = 0; i < firstBallsArr.length; i++) {
        if (!firstBallsArr[i].isEaten) {
            firstBallsArr[i].drawBall()
            firstBallsArr[i].move()
            firstBallsArr[i].checkCollision()
        }
    }
}

//ve nhan ban
function renderClone() {
    for (let i = 0; i < clonesArr.length; i++) {
        if (!clonesArr[i].isEaten) {
            clonesArr[i].drawBall()
            clonesArr[i].move()
            clonesArr[i].checkCollision()
        }
    }
}

//ve nguoi choi
function renderPlayer() {
    plr.drawPlayer()
    plr.move()
}

//ve ban choi
function drawBoard() {
    ctx.fillStyle = '#2E282A'
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
}
//ve bang du lieu
function drawScoreBoard() {
    ctx.fillStyle = '#2E283A'
    ctx.fillRect(0, 800, scoreBoard.width, scoreBoard.height)
}

//ve dong ho
function drawTimer() {
    ctx.fillStyle = '#CD5334'
    ctx.font = '30px sans-serif'
    ctx.fillText(minutes + ':' + seconds + ':' + ticks, 10, gameCanvas.height - scoreBoard.height / 2 + 15)
}

//ve so bong con lai
function drawNumberOfBallLeft() {
    ctx.fillStyle = '#CD5334'
    ctx.font = '30px sans-serif'
    ctx.fillText('Red Ball left: ' + ballLeft, gameCanvas.width - 210, gameCanvas.height - scoreBoard.height / 2 + 15)
}

//ve so nhan ban con lai
function drawNumberOfClonesLeft() {
    ctx.fillStyle = '#CD5334'
    ctx.font = '30px sans-serif'
    ctx.fillText('Clones left: ' + cloneLeft, gameCanvas.width / 2 - 100, gameCanvas.height - scoreBoard.height / 2 + 15)
}

//xu li su kien nha phim
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

//xu li su kien nhan phim
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


//kiem tra trang thai ket thuc
function checkGameEnd() {
    if (ballLeft == 0 && cloneLeft == 0) {
        isGameOver = true
    }

    if (isGameOver) {
        if (ballLeft == 0) {
            if (cloneLeft == 0) {
                gameEnd('Won')
            } else {
                gameEnd('Lost')
            }
        } else {
            gameEnd('Lost')
        }
    }
}

//loi nhan ket thuc game
function gameEnd(msg) {
    clearInterval(game)
    clearInterval(timer)
    ctx.fillStyle = '#CD5334'
    ctx.font = '100px sans-serif'
    ctx.fillText('You ' + msg, 200, gameCanvas.height / 2)
}

//tro choi chinh
function gamePlay() {
    drawBoard()
    drawScoreBoard()
    drawTimer()
    drawNumberOfBallLeft()
    drawNumberOfClonesLeft()

    renderOriginalBalls()
    renderClone()
    renderPlayer()

    checkGameEnd()
    drawTimer()
}

//chay tro choi
let game = setInterval(gamePlay, 1000 / fps)
