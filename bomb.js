console.log("javascript running");
var mSeconds = 30.000;
var timerID;

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

// on startGame
//loadBomb()
//startTimer ()

//update timer so that it runs every milisecond
function countDown() {
  mSeconds = mSeconds - 0.1
  $(".timer").html('0:00:'+ mSeconds);
  console.log(mSeconds);
}

function startGame () {
timerID = setInterval(countDown, 100);
}

//startGame()

// seconds = seconds + 1;
// $('#timer').html('Time Elapsed: ' + seconds);
// console.log(seconds);

//loadBomb ()
//  generate wires, and random assign liveWire

cut wire ()
if cut wire !== liveWire
change image to relevant cutwire
else
load exploded div

//reset.click(setGame)


});
