interface Employee{
    id: number
    ;
}

let e1: Employee;

let e2 = { id: 123, name: "Wang" };

e1 = e2;

// We can only assign the second varibale to the first 
// variable if the members of the second variable are 
// contained in the first variable
e2 = e1;
