// $HOME/.slate.d/resize.js
//
//    RESIZE BINDINGS
//
// Jeff LANCE <jeff.lance@mala.fr>
//
// 12/10/2014
//


slate.log("RESIZE");


slate.bindAll({
    "right:alt": slate.operation(
        "resize", { "width" : "+10%", "height" : "+0" }
    ),
    "left:alt": slate.operation(
        "resize", { "width" : "-10%", "height" : "+0" }
    ),
    "up:alt": slate.operation(
        "resize", { "width" : "+0", "height" : "-10%" }
    ),
    "down:alt": slate.operation(
        "resize", { "width" : "+0", "height" : "+10%" }
    )
    // "right:alt": slate.operation(
    //     "resize", { "width" : "-10%", "height" : "+0", "anchor" : "bottom-right" }
    // ),
    // "left:alt": slate.operation(
    //     "resize", { "width" : "+10%", "height" : "+0", "anchor" : "bottom-right" }
    // ),
    // "up:alt": slate.operation(
    //     "resize", { "width" : "+0", "height" : "+10%", "anchor" : "bottom-right" }
    // ),
    // "down:alt": slate.operation(
    //     "resize", { "width" : "+0", "height" : "-10%", "anchor" : "bottom-right" }
    // ),
});
