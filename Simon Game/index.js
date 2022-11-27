var buttonColors = ["red", "green", "yellow", "blue"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++;

  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColors[randomNumber]);

  var randomColor = "#" + buttonColors[randomNumber];
  $(randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  var randomColorSound = "sounds/" + buttonColors[randomNumber] + ".mp3";
  var sound = new Audio(randomColorSound);
  sound.play();
}
$(".btn").on("click", function() {

  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);

  var sound = new Audio("sounds/" + userChosenColor + ".mp3");
  sound.play();

  checkAnswer(userClickedPattern.length-1);

  userChosenColor = "#" + this.id;
  $(userChosenColor).addClass("pressed");
  setTimeout(function() {
    $(userChosenColor).removeClass("pressed")
  }, 100)
console.log(gamePattern);
});

function checkAnswer(currentLevel) {

  if ( userClickedPattern[currentLevel] === gamePattern[currentLevel]){
  console.log("sucsses");


  if (gamePattern.length === userClickedPattern.length)

  setTimeout(function(){
    nextSequence();

  },1000)}
else {
  $("body").addClass("game-over");

   setTimeout(function () {
     $("body").removeClass("game-over");
   }, 200);

   $("#level-title").text("Game Over, Press Any Key to Restart")
   startOver();

 }

}

function startOver(){
  gamePattern=[];
  level = 0;
  started = false;
}
