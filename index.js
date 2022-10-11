"use strict";
exports.__esModule = true;
exports.hello = void 0;
exports.hello = "world";
var addTwoNumbers = function (a, b) {
    return a + b;
};
var result = addTwoNumbers(1, 2);
// we can play with our results as typescript has denoted number to a and b
var resultStringified = result.toFixed();
var secondResult = addTwoNumbers(parseInt(resultStringified), 2);
