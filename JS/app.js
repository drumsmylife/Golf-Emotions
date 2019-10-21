
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
  var hexColorStr = '#' + hours + minutes + seconds;

  clock.textContent = clockStr;
  hexColor.textContent = hexColorStr;
  document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);


function showPumped() {
  document.getElementById("goInBall").style="display:block";
  
}
showPumped();

function hidePumped(){

  document.getElementById('goInBall').style='display:none';;
  
  }
  hidePumped();




  function showPissed () {
  document.getElementById('enough').style="display:block";
}
showPissed();

function hidePissed(){

  document.getElementById('enough').style='display:none';;
  
  }
  hidePissed();

  
  
  
  function showCalm () {
    document.getElementById('hips').style="display:block";
  }
  showCalm();
  
  function hideCalm(){
  
    document.getElementById('hips').style='display:none';;
    
    }
    hideCalm();


    function uSerious () {
      document.getElementById('cmon').style="display:block";
    }
   uSerious();
    
    function hideuSerious(){
    
      document.getElementById('cmon').style='display:none';;
      
      }
      hideuSerious();
