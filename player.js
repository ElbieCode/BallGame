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
}