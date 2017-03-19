"use strict";
exports.PI = 3.14;
var Circle = (function () {
    function Circle() {
    }
    Circle.prototype.calculateArea = function (diameter) {
        return exports.PI * diameter * diameter;
    };
    return Circle;
}());
exports.Circle = Circle;
