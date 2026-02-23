var greeting = function () {
    return "Hello";
};
console.log(greeting());
// Passing Parameters
var profile = function (name) {
    return "Hello " + name;
};
console.log(profile("Wangutusi Arshton"));
// Arrow function to calculate product
var product = function (num1, num2) {
    return num1 * num2;
};
console.log("Product is", product(45, 79));
//  Array of arrow functions
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]()); // To invoke the function use the open and close brakets.
}
