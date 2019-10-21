
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


function showImg() {
  var inBall = document.getElementById('goInBall');
  if (inBall.style.display === 'none') {
    inBall.style.display = 'block';
  } else {
    inBall.style.display = 'none';
  }
}

function showImg() {
  var hips = document.getElementById('seeYa');
  if (hips.style.display === 'none') {
    hips.style.display = 'block';
  } else {
    hips.style.display = 'none';
  }
}