function add(x: number, y: number):number{
    return x + y;
}

function sub(x: number, y: number):number{
    return x - y;
}

export { add, sub };


// Exporting individual keywords such as the function below
export function div(x: number, y: number):number{
    return x - y;
}


// Exporting defualt 
export default function div1(x: number, y: number):number{
    return x - y;
}

// Importing class modules
import { Calculator } from "./class-modules";
var calc = new Calculator();
console.log(calc.add(2, 78));
console.log(calc.sub(2, 78));