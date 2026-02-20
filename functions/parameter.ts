function hello(name:string): string{
    return "Hello" + name;;
}
console.log(hello("Wangutusi"));

// fuction to ad numbers
function add(num1: number, num2: number): number{
    return num1 + num2;
}

console.log("The sum is " + add(789, 65)); // Invoking the function

// Optional parameters
function display(id: number, name: string, role?: string) {
    console.log("Id:", id);
    console.log("Name", name);
    if (role != undefined) {
         console.log("Role", role);
    } 
}

display(1, "Wangjtusi", "Admin");

// Default parameters
function display1(id: number, name: string, role: "Normal") {
    console.log("Id:", id);
    
}

display(1, "Wangjtusi", "Admin");


//function as a parameter of another(Call back Function)
function calculator(fun: any): void{
    console.log(fun(10, 1));
}

calculator(add);

// Fucntions returns another back
function calculator2(): any{
    function subtraact(num1: number, num2: number): number{
        return num1 - num2;
    }
    return subtraact;
}

var sub = calculator2();
console.log(sub(20, 5));