let minutes = 00
let seconds = 00
let ticks = 00

let stopTimer = false

function timerCycle() {
    if (stopTimer == false) {
        ticks = parseInt(ticks)
        seconds = parseInt(seconds)
        minutes = parseInt(minutes)

        ticks = ticks + 1
        if (ticks > 99) {
            seconds = seconds + 1
            ticks = 0
        }
        if (seconds > 59) {
            minutes = minutes + 1
            seconds = 0
            ticks = 0
        }
        if (ticks < 10) {
            ticks = '0' + ticks
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
    }
 
    drawTimer()
}
let timer = setInterval(timerCycle,10)