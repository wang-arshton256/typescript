var greeting = (): string => {
    return "Hello";
}
console.log(greeting())

// Passing Parameters
var profile = (name:string): string => {
    return "Hello " + name;
}
console.log(profile("Wangutusi Arshton"));

// Arrow function to calculate product
var product = (num1:number, num2:number): number => {
    return num1 * num2;
}
console.log("Product is", product(45, 79));

//  Array of arrow functions
var myarray: Array<any> = [];

for (var i = 0; i < 10; i++) {
    myarray.push(():number => { return i });
}

for (var i = 0; i < 10; i++){
    console.log(myarray[i]()); // To invoke the function use the open and close brakets.
}