let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

// Start button
startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10); // update every 10 ms
});

// Stop button
stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
});

// Reset button
resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    msec = secs = mins = 0;
    timerDisplay.innerHTML = `00 : 00 : 00`;
});

// Timer function
function startTimer() {
    msec++;
    if (msec === 100) {   // 100 * 10ms = 1 second
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
