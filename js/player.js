class Player {
    constructor() {
        this.width = 30
        this.height = 30
        this.x = (gameCanvas.width / 2) - (this.width / 2)
        this.y = (gameCanvas.height / 2) - (this.height / 2)
        this.speed = 10
        this.color = '#e9b44c'
        this.isMovingLeft = false
        this.isMovingRight = false
        this.isMovingUp = false
        this.isMovingDown = false
        this.alive = true
    }
    drawPlayer() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    move() {
        //di chuyen nguoi choi
        if (plr.isMovingUp) {
            plr.y -= plr.speed
        } else if (plr.isMovingDown) {
            plr.y += plr.speed
        } else if (plr.isMovingLeft) {
            plr.x -= plr.speed
        } else if (plr.isMovingRight) {
            plr.x += plr.speed
        }

        //xu li su kien nguoi choi di qua bien
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
}