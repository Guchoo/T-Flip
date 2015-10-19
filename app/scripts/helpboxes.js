function camelcase() {
  // Set height and width
  var NewWinHeight=400;
  var NewWinWidth=400;

  // Place the window
  var NewWinPutX=(screen.width/2)-NewWinWidth;
  var NewWinPutY=(screen.height/2)-NewWinHeight;

  //Get what is below onto one line

  TheNewWin = window.open("info.html",'CamelCase','fullscreen=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no');

  //Get what is above onto one line

  TheNewWin.resizeTo(NewWinHeight,NewWinWidth);
  TheNewWin.moveTo(NewWinPutX,NewWinPutY);
}
