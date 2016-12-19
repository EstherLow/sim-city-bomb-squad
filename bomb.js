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
  $(".timer").html('0:00:'+ mSeconds.toFixed(3));
  return mSeconds;
}

function startGame () {
timerID = setInterval(countDown, 100);
if (mSeconds == 0) {
  console.log("time's up!");
  clearInterval = (timerID);
  }
}

//startGame()

//loadBomb ()
//  generate wires, and random assign liveWire

// cut wire ()
// if cut wire !== liveWire
// change image to relevant cutwire
// else
// load exploded div

//reset.click(setGame)


});
