'use strict';
function camelcase() {
  // Set height and width
  var NewWinHeight = 400;
  var NewWinWidth = 400;

  // Place the window
  var NewWinPutX = (screen.width / 2) - NewWinWidth;
  var NewWinPutY = (screen.height / 2) - NewWinHeight;

  //Get what is below onto one line

  var TheNewWin = window.open('info.html', 'CamelCase', 'fullscreen=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no');

  //Get what is above onto one line

  TheNewWin.resizeTo(NewWinHeight, NewWinWidth);
  TheNewWin.moveTo(NewWinPutX, NewWinPutY);
}


$(function () {
    $.notify.addStyle('achievement', {
      html: "<div><h2 class='notification-header'><span data-notify-text/></h2><div class='trophy-gadget notification'><table class='trophy-gadget-content'><tr><td><img src='images/gold.png' height='50%' width='50%'></td><td><h3 class='trophy-header'>Visitor</h3><h4> Visit assignment page</h4></td></tr></table></div></div>",
      classes: {
        base: {
          "white-space": "nowrap",
          "background-color": "white",
          "padding": "10px",
          "border": "1px solid black"
        }
      }
    });
    $('[data-toggle="popover"]').popover({html:true});
    $('#notification-trigger').click(function(){
      $.notify('New Achievement!', {style: 'achievement', autoHideDelay: 10000});
  });
})
