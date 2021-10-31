class cloneBall {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 10
        this.vX = Math.floor(Math.random() * (5 - -5) + -5)
        this.vY = Math.floor(Math.random() * (5 - -5) + -5)
        this.color = '#EDB88B'
    }
    move() {
        this.x += this.vX
        this.y += this.vY
        if (this.x < this.radius) {
            this.x = this.radius
            this.vX *= -1
        }
        if (this.x + this.radius > gameCanvas.width) {
            this.x = gameCanvas.width - this.radius
            this.vX *= -1
        }
        if (this.y < this.radius) {
            this.y = this.radius
            this.vY *= -1
        }
        if (this.y + this.radius > gameCanvas.height - scoreBoard.height) {
            this.y = gameCanvas.height - this.radius - scoreBoard.height
            this.vY *= -1
        }
    }
    drawBall() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
    }
    checkCollision() {
        if ((this.x <= plr.x + plr.width)
            && (this.x >= plr.x)
            && (this.y >= plr.y)
            && (this.y <= plr.y + plr.height)) {
            isGameOver = true
        }
    }
}