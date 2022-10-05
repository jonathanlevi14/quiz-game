//DONT TOUCH THIS!
//get the score from local storage
var highScore = JSON.parse(window.localStorage.getItem("score"));
//set var highScore to show on html page
document.querySelector("span").textContent = highScore;
//submit button event for score
document.querySelector("#save").addEventListener("click", function (event) {
  event.preventDefault();
  event.target.disabled = true;

  // Save related form data as an object
  var loggedScore = {
    player: document.querySelector("input").value,
    score: highScore,
  };

  var savedScores = JSON.parse(localStorage.getItem("savedScores"));
  if (!savedScores) {
    savedScores = [];
  }
  console.log(savedScores);
  savedScores.push(loggedScore);
  localStorage.setItem("savedScores", JSON.stringify(savedScores));
  document.querySelector("#mushrooms").textContent = loggedScore.score;
  document.querySelector("#initials").textContent = loggedScore.player;

  var h2 = document.body;

  for (var i = 0; i < savedScores.length; i++) {
    var highScoreElement = document.createElement("h3");
    highScoreElement.textContent =
    savedScores[i].player + "    " + savedScores[i].score;
    h2.appendChild(highScoreElement);
  }
});
