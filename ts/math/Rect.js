"use strict";
var Rect = (function () {
    function Rect() {
    }
    Rect.prototype.calculateArea = function (width, length) {
        return width * length;
    };
    return Rect;
}());
exports.Rect = Rect;
