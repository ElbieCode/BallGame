class originalBall {
    constructor() {
        this.x = Math.floor(Math.random() * gameCanvas.width)
        this.y = Math.floor(Math.random() * gameCanvas.height)
        this.radius = 8
        this.vX = Math.floor(Math.random() * (10 - -10) + -10)
        this.vY = Math.floor(Math.random() * (10 - -10) + -10)
        this.color = '#CD5334'
        this.isEaten = false
    }
    //di chuyen + xu li su kien tao nhan ban
    move() {
        this.x += this.vX
        this.y += this.vY
        if (this.x < this.radius) {
            this.x = this.radius
            this.vX *= -1
            clonesArr.push(new cloneBall(this.x, this.y))
            cloneLeft ++
        }
        if (this.x + this.radius > gameCanvas.width) {
            this.x = gameCanvas.width - this.radius
            this.vX *= -1
            clonesArr.push(new cloneBall(this.x, this.y))
            cloneLeft ++
        }
        if (this.y < this.radius) {
            this.y = this.radius
            this.vY *= -1
            clonesArr.push(new cloneBall(this.x, this.y))
            cloneLeft ++
        }
        if (this.y + this.radius > gameCanvas.height - scoreBoard.height) {
            this.y = gameCanvas.height - this.radius - scoreBoard.height
            this.vY *= -1
            clonesArr.push(new cloneBall(this.x, this.y))
            cloneLeft ++
        }
    }
    // ve
    drawBall() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
    }
    //kiem tra va cham voi nguoi choi
    checkCollision() {
        if (!this.isEaten) {
            if ((this.x + this.radius <= plr.x + plr.width) && (this.x - this.radius >= plr.x) && (this.y - this.radius >= plr.y) && (this.y + this.radius <= plr.y + plr.height)) {
                this.isEaten = true
                ballLeft--
            }
        }
    }
}
