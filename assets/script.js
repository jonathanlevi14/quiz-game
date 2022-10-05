//List of Questions
var questions = [
  "Who is known to be the God Father of mushroom cultivation?",
  "Which kingdom does mushroom belong to?",
  "Which country is the largest producer of mushrooms?",
  "What is a loose grouping of mushrooms called?",
];
//List of Answers
var correctAnswers = ["Paul Stamets", "Fungi", "China", "Gregarious"];
//List of possible choice to each question
var otherOptions = {
  option1: ["Paul Stamets", "Sundown Hazen", "Brent Neil", "George Toma"],
  option2: ["Animal", "Fungi", "Plant", "Mineral"],
  option3: ["USA", "Indonesia", "India", "China"],
  option4: ["Troopa", "FunGroup", "Gregarious", "Huddle"],
};

//SET OF GLOBAL VAR
var userAnswers = [];
var answerCount = 0;
var answerCounter = document.getElementById("#count");
var question = " ";
var timerEl = document.getElementById("countdown");
var timeLeft = 200;
var i = 0;
var questionNumber;

// //validate selection choice
// //listen for button selection to execute funtion
document.querySelector("button#button0").addEventListener("click", (e) => handleClick(e));
document.querySelector("button#button1").addEventListener("click", (e) => handleClick(e));
document.querySelector("button#button2").addEventListener("click", (e) => handleClick(e));
document.querySelector("button#button3").addEventListener("click", (e) => handleClick(e));

function handleClick(e) {
  i++;
  var buttonName = e.target.innerHTML;
  userAnswers.push(buttonName);
  if (userAnswers[i - 1] === correctAnswers[i - 1]) {
    //add a point
    answerCount++;
    document.getElementById("count").textContent = answerCount;
    console.log(answerCount, "points at click");
    console.log(userAnswers);
  } else {
    // take away time
    console.log((timeLeft -= 30));
  }
  if (i == questions.length) {
    localStorage.setItem("score", answerCount);
    gameOver();
  }
  loadQuestion();
}

//generate a question
//got the concept from all over the internet forums
function loadQuestion() {
  document.getElementById("actual-question").textContent = questions[i];
  for (let j = 0; j < questions.length; j++) {
    document.getElementById(`button${j}`).textContent =
      otherOptions[`option${i + 1}`][j];
  }
}

// end game function
function gameOver() {
  window.location.href = "highscore.html";
}

// // START THE CLOCK: ✅
// // got the concept from schoolwork:
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else if (timeLeft === 0) {
      //if timer runs out say game over
      clearInterval(timeInterval);
      gameOver();
    } else {
      timerEl.textContent = "";

      clearInterval(timeInterval);
    }
  }, 1000);
}
loadQuestion();
countdown();
