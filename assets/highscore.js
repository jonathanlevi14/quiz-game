
//submit button event
document.querySelector("input").addEventListener("submit", function(event) {
    event.preventDefault();
  var lastScore = highScore;
  // Save related form data as an object
  var loggedScore = {
    player: initials,
    score:  highScore
  }
    lastScore.push(loggedScore);
    localStorage.setItem("lastScore",JSON.stringify(lastScore));
    return
})



// function saveLastScore() {
//    };


// function renderLastScore() { 
//   ;
//   if (lastScore !== null) {
//     document.querySelector("initials").innerHTML = loggedScore.player;
//     document.querySelector("mushrooms").innerHTML = loggedScore.score;
//   }
// }



// function renderLastScore() {
//   var lastScore = JSON.parse(localStorage.getItem("score"))
//   if (lastScore !== null) {
//     document.getElementById("Initials").innerHTML = lastscore.player;
//     document.getElementById("mushrooms").innerHTML = lastscore.score;
//   }
// }










//DONT TOUCH THIS!
//get the score from local storage 
var highScore = JSON.parse(window.localStorage.getItem("score"));
//print to enter initials section
document.querySelector("span").textContent = highScore


