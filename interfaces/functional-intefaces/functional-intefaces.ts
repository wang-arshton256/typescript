interface Add{
    (x:number, y:number):void // If you dont declare a particular return type ducing interface declaration,
    // you can assign any return type to the function. However if you declare a specifc retrurn type durng 
    // the object declaration, you must maintain it throughout.
}

interface Sub{
    (x: number, y: number): number;
}

var add: Add;
var sub: Sub;

add = function (x: number, y: number):void {
    console.log(x + y);
}

sub = function (a: number, b: number):number {
    return a - b;
}
console.log(sub);