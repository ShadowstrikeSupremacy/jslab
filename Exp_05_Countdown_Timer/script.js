let timerId = null;   // id returned by setInterval
let deadline = 0;     // end time in milliseconds

// Step 2: calculate remaining time and convert into days, hours, minutes, seconds
function getTimeRemaining(endTime) {
  let total = endTime - Date.now();
  let seconds = Math.floor((total / 1000) % 60);
  let minutes = Math.floor((total / 1000 / 60) % 60);
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  let days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total: total, days: days, hours: hours, minutes: minutes, seconds: seconds };
}

// Step 3: output the result in the element with id "timer"
function updateTimer() {
  let t = getTimeRemaining(deadline);
  let display = document.getElementById("timer");

  // Step 4: show "EXPIRED" when the countdown is over
  if (t.total <= 0) {
    clearInterval(timerId);
    timerId = null;
    display.innerHTML = "EXPIRED";
    return;
  }

  display.innerHTML = t.days + "d " + t.hours + "h " + t.minutes + "m " + t.seconds + "s";
}

// Step 1: read and validate the end date
function startTimer() {
  let input = document.getElementById("endDate").value;
  let parsed = Date.parse(input);

  if (isNaN(parsed)) {
    document.getElementById("timer").innerHTML = "Invalid date. Please enter a valid end date.";
    return;
  }

  deadline = parsed;
  if (timerId !== null) clearInterval(timerId);
  updateTimer();
  if (deadline > Date.now()) {
    timerId = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}
