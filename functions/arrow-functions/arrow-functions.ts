var greeting = (): string => {
    return "Hello";
}
console.log(greeting())

// Passing Parameters
var profile = (name:string): string => {
    return "Hello " + name;
}
console.log(profile("Wangutusi Arshton"));


var product = (num1:number, num2:number): number => {
    return num1 * num2;
}
console.log("Product is", product(45, 79));