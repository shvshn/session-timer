let totalSeconds = 0;
let intervalId = null;
let isRunning = false;
let isTimerMode = false;

function startTimer() {
  if (!isRunning && !isTimerMode) {
    intervalId = setInterval(updateTimer, 1000);
    isRunning = true;
    document.querySelector(".start-btn").innerText = "Pause";
  } else if (!isRunning && isTimerMode) {
    intervalId = setInterval(timerCountDown, 1000);
    isRunning = true;
    document.querySelector(".start-btn").innerText = "Pause";
  } else if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    document.querySelector(".start-btn").innerText = "Start";
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

  const displayElement = document.querySelector(".js-timer-display");
  displayElement.innerHTML = `${hours}<span class="subscript-text"><sub>h</sub></span>:${mins}<span class="subscript-text"><sub>m</sub></span>:${seconds}<span class="subscript-text"><sub>s</sub></span>`;
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  totalSeconds = 0;
  displayTimer();
  document.querySelector(".start-btn").innerText = "Start";
}

function showModal() {
  document.querySelector(".modal").style.display = "flex";
}

function hideModal() {
  document.querySelector(".modal").style.display = "none";
}

function timer() {
  const timerInput = document.querySelector("#timer-input").value;
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
