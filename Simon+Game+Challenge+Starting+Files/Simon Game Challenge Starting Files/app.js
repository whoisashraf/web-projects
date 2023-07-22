let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let randomColor;
let userPattern = [];
let level = 0;
let audio;

$(document).keypress(() => {
  nextSequence();
  $("#level-title").text("level" + " " + level);
  $(document).off("keypress");
});

$("div#" + randomColor)
  .fadeOut(250)
  .fadeIn(250);
$('div[type="button"]').click((element) => {
  // console.log(element)
  let userColor = element.target.attributes[1].nodeValue;
  $(element.target).addClass("pressed");
  setTimeout(() => {
    $(element.target).removeClass("pressed");
  }, 100);
  userPattern.push(userColor);
  playSound(userColor);
  // console.log(userPattern);
  checkAnswer(userPattern.length - 1);
});

function nextSequence() {
  userPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  playSound(randomColor);
  $("div#" + randomColor).addClass("pressed");
  setTimeout(() => {
    $("div#" + randomColor).removeClass("pressed");
  }, 100);
  level++;
  $("#level-title").text("level" + " " + level);
  // console.log(gamePattern);
}

function playSound(name) {
  let userAudio = new Audio("sounds/" + name + ".mp3");
  userAudio.play();
}
function checkAnswer(currentLevel) {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("correct");
    if (userPattern.length === gamePattern.length) {
      console.log("finished!");
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
  console.log(userPattern);
  console.log(gamePattern);
}

function startOver() {
  level = 0;
  gamePattern = [];
  userPattern = [];
  $(document).on("keypress", () => {
    nextSequence();
    $("#level-title").text("level" + " " + level);
    $(document).off("keypress");
  });
}
