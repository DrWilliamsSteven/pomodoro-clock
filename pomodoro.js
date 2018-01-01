$(document).ready(function () {

  var timeremain = parseInt($('#sessiontime').html());
  var breaktimeremain = parseInt($('#breaktime').html());
  var buzzer = $('#buzzer')[0];

  $('#sessionminus').click(function () {
    if (timeremain > 1) {
      timeremain -= 1;
      $('#sessiontime').html(timeremain + ":00");
    }
  });

  $('#sessionplus').click(function () {
    timeremain += 1;
    $('#sessiontime').html(timeremain + ":00");
  });

  $('#breakminus').click(function () {
    if (breaktimeremain > 1) {
      breaktimeremain -= 1;
      $('#breaktime').html(breaktimeremain + ":00");
    }
  });

  $('#breakplus').click(function () {
    breaktimeremain += 1;
    $('#breaktime').html(breaktimeremain + ":00");
  });

  $('#start').click(function () {
    var counter = setInterval(timer, 1000);
    timeremain *= 60;
    breaktimeremain *= 60;

    function timer() {
      timeremain -= 1;

      if (timeremain === 0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
      }

      if (timeremain % 60 >= 10) {
        $('#sessiontime').html(Math.floor(timeremain / 60) + ":" + timeremain % 60);
      } else {
        $('#sessiontime').html(Math.floor(timeremain / 60) + ":0" + timeremain % 60);
      }

      function breakTimer() {
        breaktimeremain -= 1;

        if (breaktimeremain === 0) {
          buzzer.play();
          clearInterval(startBreak);
        }

        if (breaktimeremain % 60 >= 10) {
          $('#breaktime').html(Math.floor(breaktimeremain / 60) + ":" + breaktimeremain % 60);
        } else {
          $('#breaktime').html(Math.floor(breaktimeremain / 60) + ":0" + breaktimeremain % 60);
        }
      }
    }
  });

  $('#reset').click(function () {
    timeremain = 25;
    $('#sessiontime').html(timeremain + ":00");
    breaktimeremain = 5;
    $('#breaktime').html(breaktimeremain + ":00");
  });

});