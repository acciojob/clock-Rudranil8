
var timerElement = document.getElementById('timer');

function updateTimer() {
    var now = new Date();

    var timeString = now.toLocaleString();

    timerElement.textContent = timeString;
}

setInterval(updateTimer, 1000);