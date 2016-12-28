console.log("javascript running");
var mSeconds = 30.000;
var timerID;
var clickedId;
var liveWire;
var uncutWires = {red: 'img/uncut-red-wire.png',
                  blue: 'img/uncut-blue-wire.png',
                  green: 'img/uncut-green-wire.png',
                  white: 'img/uncut-white-wire.png',
                  yellow: 'img/uncut-yellow-wire.png'}

var cutWires = {red: 'img/cut-red-wire.png',
                  blue: 'img/cut-blue-wire.png',
                  green: 'img/cut-green-wire.png',
                  white: 'img/cut-white-wire.png',
                  yellow: 'img/cut-yellow-wire.png'}

var correctWire = [];
var incorrectWire = [];


document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

function timer () {
  mSeconds -= 0.05;
  $(".timer").html("0:00:" + mSeconds.toFixed(3))
  return mSeconds;
}

function countDown () {
  timerID = setInterval(timer, 50)
}

function stopTimer () {
    clearInterval(timerID);
    $(".exploded").css("visibility", "visible")
    $(".exploded").append("<audio autoplay src='sounds/BldgExplode.wav'>")
  }

function makeBomb () {
  for(var key in uncutWires) {
    $('div .wire-wrap').append('<div class="wires" id = ' + key + '><img src = '+ uncutWires[key]+ '></div> ')
  }

}

//returns id of clicked wire and load explosion when incorrect wire is clicked
function getId () {$(".wires").click(function(){
  clickedId = $(this).attr("id");
  //return clickedId;
  console.log("the id of the wire clicked " + clickedId);
  for (var i = 0; i < incorrectWire.length; i++)
  {
    if (clickedId === incorrectWire[i]) {
      $("#" + clickedId + "img").attr("src", cutWires[clickedId])
      $(".exploded").css("visibility", "visible")
      $(".exploded").append("<audio autoplay src='sounds/BldgExplode.wav'>")
      clearInterval(timerID)
    }

  }

})
}

//randomly assign live wire
function assignRandom () {
  for (var key in uncutWires) {
    var lot = Math.ceil(Math.random() * 2)
    //console.log('The lot is ' + lot);
    if (lot === 2) {
      correctWire.push(key)
    } else {
    incorrectWire.push(key) }
  }
  console.log("CorrectWire: " + correctWire);
  console.log("incorrectWire: " + incorrectWire);
}


makeBomb()
assignRandom()
getId()

window.setTimeout(stopTimer, 30050)
countDown ()


});
