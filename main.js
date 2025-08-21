"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
console.log("Hello,World!");
var a = "hey";
console.log(typeof a);
var ARRAY_LANG = ["HTML", "CSS"];
ARRAY_LANG.push("JAVASCRIPT");
console.log(ARRAY_LANG);
parseInt("101", 5);
var sales = "Toyota";
function carTypes(name) {
    return name === "Honda" ? name : "Sorry we dont sell ".concat(name);
}
var car = { myCar: "Saturn",
    getCar: carTypes("Honda"), special: sales
};
console.log(car.special);
var formatArg = function (arg) {
    if (Array.isArray(arg)) {
        return arg.map(function (part) { return "-".concat(part); }).join("\n");
    }
    if (arg.toString === Object.prototype.toString) {
        return JSON.stringify(arg);
    }
    return arg;
};
var print = function (segments) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var message = segments[0];
    segments.slice(1).forEach(function (segment, index) {
        message += formatArg(args[index]) + segment;
    });
    console.log(message);
};
var todos = [
    "Learn JS",
    "Learn web APIS",
    "Set up a website",
    "Profit!",
];
var progress = {
    javascript: 20,
    html: 65,
    css: 10,
};
print(templateObject_1 || (templateObject_1 = __makeTemplateObject(["i need to do:\n", "\nmy current progress is: ", "\n"], ["i need to do:\n", "\nmy current progress is: ", "\n"])), todos, progress);
// this does not work at all
/*
  const str: string = "
    this string \
    is broken \
  in multiple \
   lines
  "
  console.log(str);
*/
/* function checkData(){
  if (document.form1.threeChar.value.length === 3){
    return true;
  }
  alert(
    `Enter EXACTLY three characters ${document.form1.threeChar.value} isnt valid`,
  );
  return false;
} */
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return 'Invalid operator';
    }
}
rl.question('Enter the first number:', function (firstInput) {
    var a = parseFloat(firstInput);
    rl.question('Enter an operator', function (operator) {
        rl.question('Enter the second number: ', function (secondInput) {
            var b = parseFloat(secondInput);
            var result = calculator(a, b, operator);
            console.log("result: ".concat(result));
            rl.close();
        });
    });
});
var templateObject_1;
