let totalSeconds = 0;
let intervalId = null;
let isRunning = false;
let isTimerMode = false;

function startTimer() {
  if (!isRunning && !isTimerMode) {
    intervalId = setInterval(updateTimer, 1000);
    isRunning = true;
  } else if (!isRunning && isTimerMode) {
    intervalId = setInterval(timerCountDown, 1000);
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

// Modal control functions
function showModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.pointerEvents = "auto";
}

function hideModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
  modal.style.pointerEvents = "none";
}

function timer() {
  const timerInput = document.querySelector(".timer-input").value;
  if (timerInput && timerInput > 0) {
    isTimerMode = true;
    totalSeconds = timerInput * 60;
    displayTimer();
    hideModal();
    startTimer();
  } else {
    alert("Please enter a valid time in minutes!");
  }
}

function timerCountDown() {
  if (totalSeconds == 0) {
    clearInterval(intervalId);
    isRunning = false;
    isTimerMode = false;
    return;
  }
  totalSeconds--;
  displayTimer();
}
