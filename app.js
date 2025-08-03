let totalSeconds = 0;
let intervalId = null;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}

function updateTimer() {
  totalSeconds++;
  displayTimer();
}

function displayTimer() {
  let hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  let mins = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let seconds = (totalSeconds % 60).toString().padStart(2, "0");

  document.querySelector(
    ".js-timer-display"
  ).innerHTML = `<div>${hours}:${mins}:${seconds}</div>`;
}

function pauseTimer() {
  clearInterval(intervalId);
  isRunning = false;
  // displayTimer();
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  totalSeconds = 0;
  displayTimer();
}
