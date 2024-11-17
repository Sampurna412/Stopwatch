// Initialize variables
let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

// Get the display elements
const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');

// Buttons
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

// Start/Stop button functionality
startStopButton.addEventListener('click', toggleStartStop);

// Reset button functionality
resetButton.addEventListener('click', resetStopwatch);

function toggleStartStop() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        // Start the stopwatch
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

// Update time every second
function updateTime() {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    // Display the updated time
    displayHours.textContent = formatTime(hours);
    displayMinutes.textContent = formatTime(minutes);
    displaySeconds.textContent = formatTime(seconds);
}

// Format time with two digits
function formatTime(value) {
    return value < 10 ? '0' + value : value;
}

// Reset the stopwatch
function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayHours.textContent = '00';
    displayMinutes.textContent = '00';
    displaySeconds.textContent = '00';
    startStopButton.textContent = 'Start';
}
