class Calculator{
    static sum(num1: number, num2: number): number{
        return num1 + num2;
    }

    static sub(num1: number, num2: number): number{
            return num1 - num2;
        }
}

console.log(Calculator.sum(45, 98));
console.log(Calculator.sub(45, 98));
