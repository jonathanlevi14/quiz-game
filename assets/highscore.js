//DONT TOUCH THIS!
//get the score from local storage 
var highScore = JSON.parse(window.localStorage.getItem("score"));
//set var highScore to show on html page
document.querySelector("span").textContent = highScore;
// document.querySelector("").textContent = "";
//-------------------------------------------------------------------
// document.querySelector()
//submit button event for score
document.querySelector("#save").addEventListener("click", function(event) {
    event.preventDefault();
  // Save related form data as an object
  var loggedScore = {
    player: document.querySelector("input").value,
    score:  highScore
  }
  
  var savedScores = JSON.parse(localStorage.getItem("savedScores"))
  if (!savedScores) {
    savedScores = [];
  }
  console.log(savedScores)
    savedScores.push(loggedScore);
    localStorage.setItem("savedScores",JSON.stringify(savedScores));

    document.querySelector("#mushrooms").textContent = loggedScore.score;
    document.querySelector("#initials").textContent = loggedScore.player;

})
//--------------------------------------------------------------------
document.querySelector("#save").addEventListener("click", function(event) {
  event.preventDefault();
// Save related form data as an object
var loggedScore = {
  player: initials,
  score:  highScore
}
  var savedInitials = JSON.parse(localStorage.getItem("savedInitials"))
  if (!savedInitials) {
    savedInitials =[];
  }
  console.log(savedInitials);
  savedInitials.push(loggedScore);
  localStorage.setItem(savedInitials,JSON.stringify(savedInitials));
})
// console.log(loggedScore.player);


//----------------------------------------------------------------------
//render  lastScore to the High scores list
// function saveLastScore() {
//   var newLine = document.createElement("li");
//   newLine.textContent = savedScores.score;
//   console.log(newLine)
//    };

// document.querySelector("#mushrooms").textContent = savedScores
