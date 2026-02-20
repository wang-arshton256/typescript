function hello(name) {
    return "Hello" + name;
    ;
}
console.log(hello("Wangutusi"));
// fuction to ad numbers
function add(num1, num2) {
    return num1 + num2;
}
console.log("The sum is " + add(789, 65)); // Invoking the function
// Optional parameters
function display(id, name, role) {
    console.log("Id:", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Wangjtusi", "Admin");
// Default parameters
function display1(id, name, role) {
    console.log("Id:", id);
}
display(1, "Wangjtusi", "Admin");
//function as a parameter of another(Call back Function)
function calculator(fun) {
    console.log(fun(10, 1));
}
calculator(add);
// Fucntions returns another back
function calculator2() {
    function subtraact(num1, num2) {
        return num1 - num2;
    }
    return subtraact;
}
var sub = calculator2();
console.log(sub(20, 5));
