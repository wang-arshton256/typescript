class Employee {
    constructor(
        public firstName: string,
        public lastName: string,
        public designation: string
    ) {}

    public print(): void {
        console.log("Employee Details");
    }
}

class Manager extends Employee {
    constructor(firstName: string, lastName: string, designation: string) {
        super(firstName, lastName, designation);  // ✅ Pass to parent
    }

    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}

class Accountant extends Employee {}
class HR extends Employee {}


// Create instances
let Employees: Employee[] = [
    new Manager("John", "Base", "Manager"),
    new Accountant("Mirember", "Cynthia", "Accountant"),
    new HR("Mary", "Bate", "HR Manager")
];

for (let employee of Employees) {
    employee.print();
}