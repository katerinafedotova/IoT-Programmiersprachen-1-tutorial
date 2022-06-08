const audio = document.querySelector("audio")
const toggleMuteButton = document.getElementById("toggle-mute-button")

const toggleMute = () => {
    if (audio.muted) {
        audio.muted = false
        audio.play()
        toggleMuteButton.innerHTML = "Turn sound off"
    } else {
        audio.muted = true
        audio.pause()
        audio.currentTime = 0
        toggleMuteButton.innerHTML = "Turn sound on"
    }
}

toggleMuteButton.addEventListener("click", toggleMute)
