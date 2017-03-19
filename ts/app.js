"use strict";
var Circle_1 = require('./math/Circle');
require("jQuery");
var shape = new Circle_1.Circle();
console.log(shape.calculateArea(10));
var MyMap = (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, value) {
        this.map[key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printAll = function () {
        for (var i in this.map) {
            console.log(this.map[i]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 10);
numberMap.setItem("oranges", 2);
numberMap.printAll();
$("#hello").css({
    "background-color": "green"
});
