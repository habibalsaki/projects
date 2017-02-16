var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var Math;
(function (Math) {
    var PI = 3.14;
    function calculateRadius(diameter) {
        return PI * diameter;
    }
    Math.calculateRadius = calculateRadius;
    function calculateArea(width, length) {
        return width * length;
    }
    Math.calculateArea = calculateArea;
})(Math || (Math = {}));
console.log(Math.calculateArea(4, 6));
