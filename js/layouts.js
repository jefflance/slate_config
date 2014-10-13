// $HOME/.slate.d/layouts.js
//
//    LAYOUTS
//
// Jeff LANCE <jeff.lance@mala.fr>
//
// 12/10/2014
//


slate.log("LAYOUTS");


var layoutFullScreen, layoutQuarter;


// Fullscreen layout
layoutFullScreen = slate.layout("Full Screen", {
    "_after_": {
        "operations": [fullscreen],
        "ignore-fail": true,
        "sort-title": true,
        "repeat": true,
    }
});
