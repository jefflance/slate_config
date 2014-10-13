// $HOME/.slate.d/functions.js
//
//    FUNCTIONS
//
// Jeff LANCE <jeff.lance@mala.fr>
//
// 12/10/2014
//


slate.log('FUNCTIONS');


var tile = function(windowObject) {
  var windows = [];
  slate.eachApp(function(app) {
    app.eachWindow(function(win) {
      if (win.isMinimizedOrHidden()) return;
      if (null == win.title() || win.title() === '') return;
      windows.push(win);
    });
  });

  var ss          = slate.screen().rect();
  var windowSizeX = ss.width * 0.5;
  var windowSizeY = ss.height / (windows.length - 1);
  var winPosY     = 0;

  for (i = 0; i < windows.length; i++) {
    w = windows[i];

    if (w.title() == windowObject.title()) {
      mainWidth = (windows.length > 1) ? 'screenSizeX*0.5' : 'screenSizeX';

      w.doOperation('move', {
        'x': 'screenOriginX',
        'y': 'screenOriginY',
        'width': mainWidth,
        'height': 'screenSizeY'
      });
    }
    else {
      w.doOperation('move', {
        'x': 'screenSizeX*0.5',
        'y': winPosY,
        'width': windowSizeX,
        'height': windowSizeY
      });

      winPosY += windowSizeY;
    }
  }
}
