//DONT TOUCH THIS!
//get the score from local storage 
var highScore = JSON.parse(window.localStorage.getItem("score"));
//set var highScore to show on html page
document.querySelector("span").textContent = highScore


//submit button event
document.querySelector("#save").addEventListener("click", function(event) {
    event.preventDefault();
  var lastScore = highScore;
  // Save related form data as an object
  var loggedScore = {
    player: initials,
    score:  highScore
  }
  var savedScores = JSON.parse(localStorage.getItem("savedScores"))
  if (!savedScores) {
    savedScores = [];
  }
  console.log(savedScores)
    savedScores.push(loggedScore);
    localStorage.setItem("savedScores",JSON.stringify(savedScores));
})


//render  lastScore to the High scores list
function saveLastScore() {
  var newLine = document.createElement("li");
  newLine.textContent = savedScores.initials;
  console.log(newLine)

   };














//print to enter initials section
document.querySelector("span").textContent = highScore
document.querySelector("#initials-entry").textContent = initials

