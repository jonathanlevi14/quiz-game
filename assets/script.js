var questions = [
  "Who is known to be the God Father of mushroom cultivation?",
  "Which kingdom does mushroom belong to?",
  "Which country is the largest producer of mushrooms?", 
  "question4"
  ]
var correctAnswers = [ 
  "Paul Stamets",
  "Fungi",
  "China",
  "Gregarious"
  ]
var otherOptions = {
  option1: ["Paul Stamets", "Sundown Hazen", "Brent Neil", "George Toma"],
  option2: ["a2", "Fungi", "c2", "d2"],
  option3: ["a3", "b3", "c3", "China"],
  option4: ["a4", "b4", "Gregarious", "d4"],
}

//SET OF GLOBAL VAR
var userAnswers = []
var answerCount = 0
var answerCounter = document.getElementById("#count")
var question = " "
var timerEl = document.getElementById("countdown")
var timeLeft = 700
var i = 0
var questionNumber;
//generate a question✅
//start clock ✅
//validate if that question is correct 
    //if correct add a point
    //if incorrect subtract /30 seconds
//load next question ✅
  //until all questions are done✅
  // OR:
  //if timer equals zero GAME OVER✅
//when gave is over save initials with socre.


// //validate selection choice
// //listen for button selection to execute funtion
document.querySelector('button#button0').addEventListener("click", (e) => handleClick(e))
document.querySelector('button#button1').addEventListener("click", (e) => handleClick(e))
document.querySelector('button#button2').addEventListener("click", (e) => handleClick(e))
document.querySelector('button#button3').addEventListener("click", (e) => handleClick(e))

function handleClick(e){
  // console.log(e.target.innerHTML);
  i++
  var buttonName = e.target.innerHTML
  userAnswers.push(buttonName)
  if(userAnswers[i-1] === correctAnswers[i-1]){
      //add a point
      answerCount++
      document.getElementById("count").textContent = answerCount
      console.log(answerCount, "points at click")
      console.log(userAnswers)
    }  else if (i > questions.length-1){
        gameOver();
  }else {
    // take away time
    console.log(timeLeft -=30)
    }
  loadQuestion()
}
  //goes to the next question in the for loop
  // i++
  //keeps the game going if there are more questions to ask
  //  if (questions[i]){
  //  loadQuestion() 
  //ends game when no more questions to ask
  // } else { gameOver()
// }

 console.log(questions.length)
 console.log(i)


//generate a question
//got the concept from all over the internet forums
function loadQuestion() {
  document.getElementById("actual-question").textContent = questions[i];
  for (let j = 0; j < questions.length; j++) {
    document.getElementById(`button${j}`).textContent =
      otherOptions[`option${i + 1}`][j];
     
  }
}

console.log(answerCount)

  // end game function
function gameOver(){
  alert("Game Over")
  window.location.href = "highscore.html";
  // location.reload()
}



  //get question/ answer/ and options




  // function saveWinCount() {
  // // Save related form data as an object
  // var studentGrade =  correctAnswers
  // // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  // localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
  // }
// function gameOver()


//validate if that question is correct





//Render last high score . learned from school work
// var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();

// var studentGrade = {
//   student: student.value,
//   grade: grade.value,
//   comment: comment.value.trim()
// };

// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// renderMessage();

// });

// function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent = lastGrade.student + 
//     " received a/an " + lastGrade.grade
//   }
// }


// START THE CLOCK: ✅
// got the concept from schoolwork:
function countdown() {
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
  } else if (timeLeft ===  0) {
    //if timer runs out say game over
    clearInterval(timeInterval);
    gameOver()
  } else {
    timerEl.textContent = '';
  
    clearInterval(timeInterval);
  }
}, 1000);
}
loadQuestion()
countdown();