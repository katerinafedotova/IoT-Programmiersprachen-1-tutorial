const startTimerBtn = document.getElementById("start-timer-button")
const stopTimerBtn = document.getElementById("stop-timer-button")
const timer = document.getElementById("timer")
const helperText = document.getElementById("helper-text")

let counter = 0
let interval;

const startTimer = () => {
    startTimerBtn.setAttribute("disabled", true)
    interval = setInterval(() => {
        timer.innerHTML = ++counter
    }, 1000)
    setTimeout(() => {
        helperText.innerHTML = "Timer started"
    }, 1000)
}

const stopTimer = () => {
    startTimerBtn.removeAttribute("disabled")
    clearInterval(interval)
    setTimeout(() => {
        helperText.innerHTML = "Timer stopped"
    }, 1000)
}


startTimerBtn.addEventListener("click", startTimer)
stopTimerBtn.addEventListener("click", stopTimer)