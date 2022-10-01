var timerEl = document.getElementById("countdown");
function countdown() {
  var timeLeft = 700;

var timeInterval = setInterval(function () {
  if (timeLeft > 1) {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
  // } else if (timeLeft <= 697) {
  //   timerEl.textContent = timeLeft + " seconds remaining"
  //   timerEl.style.color = "red";
  //   timeLeft--;
  
  } else if (timeLeft === 1) {
    timerEl.textContent = timeLeft + " second remaining";
    timeLeft--;
  } else {
    timerEl.textContent = '';
  
    clearInterval(timeInterval);
    // displayMessage();
  }
  console.log(timeLeft)
}, 1000);
}
countdown();
