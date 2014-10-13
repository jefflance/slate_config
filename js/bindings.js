// $HOME/.slate.d/bindings.js
//
//    BINDINGS
//
// Jeff LANCE <jeff.lance@mala.fr>
//
// 12/10/2014
//


slate.log("BINDINGS");

slate.bindAll({
    // Gestion de l'écran
    "1:ctrl": left,
    "2:ctrl": fullscreen,
    "3:ctrl": right,
    "1:ctrl,shift": topLeft,
    "3:ctrl,shift": topRight,
    "1:ctrl,shift,alt": bottomLeft,
    "3:ctrl,shift,alt": bottomRight,

    // Tiling
    "=:ctrl": retile,

    // Grid
    "esc:ctrl": grid,

    // Hint
    // "§:ctrl": hint,
});
