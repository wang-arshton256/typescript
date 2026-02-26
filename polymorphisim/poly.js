var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    Employee.prototype.print = function () {
        console.log("Employee Details");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, designation) {
        return _super.call(this, firstName, lastName, designation) || this; // ✅ Pass to parent
    }
    Manager.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Manager;
}(Employee));
var Accountant = /** @class */ (function (_super) {
    __extends(Accountant, _super);
    function Accountant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Accountant;
}(Employee));
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HR;
}(Employee));
// Create instances
var Employees = [
    new Manager("John", "Base", "Manager"),
    new Accountant("Mirember", "Cynthia", "Accountant"),
    new HR("Mary", "Bate", "HR Manager")
];
for (var _i = 0, Employees_1 = Employees; _i < Employees_1.length; _i++) {
    var employee = Employees_1[_i];
    employee.print();
}
