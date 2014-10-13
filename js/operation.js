// $HOME/.slate.d/operation.js
//
//    CUSTOM OPERATION
//
// Jeff LANCE <jeff.lance@mala.fr>
//
// 12/10/2014
//


slate.log("OPERATION");


var hint, grid, fullscreen, right, left, topLeft, bottomLeft, topRight, bottomRight;


// Hint
hint = slate.operation("hint",{
    "characters": "QWERTYUIOP",
});


// Grid
grid = slate.operation("grid", {
    "grids": {
        "1280x800": {
            "width": 1,
            "height": 2
        },
    },
    "padding": 5
});


// Window positionning
fullscreen = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX',
    height: 'screenSizeY'
});

right = slate.operation('move', {
    x: 'screenSizeX / 2',
    y: 'screenOriginY',
    width: 'screenSizeX / 2',
    height: 'screenSizeY'
});

topRight = slate.operation('move', {
    x: 'screenSizeX / 2',
    y: 'screenOriginY',
    width: 'screenSizeX / 2',
    height: 'screenSizeY / 2'
});

bottomRight = slate.operation('move', {
    x: 'screenSizeX / 2',
    y: 'screenSizeY / 2',
    width: 'screenSizeX / 2',
    height: 'screenSizeY / 2'
});

left = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX / 2',
    height: 'screenSizeY'
});

topLeft = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX / 2',
    height: 'screenSizeY / 2'
});

bottomLeft = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenSizeY / 2',
    width: 'screenSizeX / 2',
    height: 'screenSizeY / 2'
});


// topLeftThird = slate.operation('move', {
//     x: 'screenOriginX',
//     y: 'screenOriginY',
//     width: 'screenSizeX / 2',
//     height: 'screenSizeY / 3'
// });
//
// midLeftThird = slate.operation('move', {
//     x: 'screenOriginX',
//     y: 'screenSizeY * .33',
//     width: 'screenSizeX / 2',
//     height: 'screenSizeY / 3'
// });
//
// bottomLeftThird = slate.operation('move', {
//     x: 'screenOriginX',
//     y: 'screenSizeY * .66',
//     width: 'screenSizeX / 2',
//     height: 'screenSizeY / 3'
// });
