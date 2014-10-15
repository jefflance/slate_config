// $HOME/.slate.d/operation.js
//
//    CUSTOM OPERATION
//
// Jeff LANCE <jeff.lance@mala.fr>
//
// 12/10/2014
//


slate.log('OPERATION');


var hint, grid, focus, reload;
var fullscreen, right, left, topLeft, bottomLeft, topRight, bottomRight, top, bottom;


// Hint
hint = slate.operation('hint',{
    'characters': 'QWERTYUIOP',
});


// Grid
grid = slate.operation('grid', {
    'grids': {
        '1280x800': {
            'width': 1,
            'height': 2
        },
    },
    'padding': 5
});


// Focus
focus = slate.operation('focus', {
    'direction' : 'behind',
});


// Reload
reload = slate.operation('relaunch');


// Window positionning
fullscreen = slate.operation('move', {
    'screen': laptop,
    'x': 'screenOriginX',
    'y': 'screenOriginY',
    'width': 'screenSizeX',
    'height': 'screenSizeY'
});

right = slate.operation('move', {
    'screen': laptop,
    'x': 'screenSizeX / 2',
    'y': 'screenOriginY',
    'width': 'screenSizeX / 2',
    'height': 'screenSizeY'
});

topRight = slate.operation('move', {
    'screen': laptop,
    'x': 'screenSizeX / 2',
    'y': 'screenOriginY',
    'width': 'screenSizeX / 2',
    'height': 'screenSizeY / 2'
});

bottomRight = slate.operation('move', {
    'screen': laptop,
    'x': 'screenSizeX / 2',
    'y': 'screenSizeY / 2',
    'width': 'screenSizeX / 2',
    'height': 'screenSizeY / 2'
});

left = slate.operation('move', {
    'screen': laptop,
    'x': 'screenOriginX',
    'y': 'screenOriginY',
    'width': 'screenSizeX / 2',
    'height': 'screenSizeY'
});

topLeft = slate.operation('move', {
    'screen': laptop,
    'x': 'screenOriginX',
    'y': 'screenOriginY',
    'width': 'screenSizeX / 2',
    'height': 'screenSizeY / 2'
});

bottomLeft = slate.operation('move', {
    'screen': laptop,
    'x': 'screenOriginX',
    'y': 'screenSizeY / 2',
    'width': 'screenSizeX / 2',
    'height': 'screenSizeY / 2'
});


top = slate.operation('move', {
    'screen': laptop,
    'x': 'screenOriginX',
    'y': 'screenOriginY / 2',
    'width': 'screenSizeX',
    'height': 'screenSizeY / 2'
});


bottom = slate.operation('move', {
    'screen': laptop,
    'x': 'screenOriginX',
    'y': 'screenOriginY / 2',
    'width': 'screenSizeX',
    'height': 'screenSizeY / 2'
});

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
