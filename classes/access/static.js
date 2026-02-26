var Check = /** @class */ (function () {
    function Check() {
    }
    // Methods to access objects
    Check.prototype.display = function () {
        check.accNo = 918815151;
        console.log(check.accNo);
    };
    Check.bankName = "Bank of America"; //     Use static property, use the static keyword
    return Check;
}());
Check.bankName = "BOA"; // ✅ Access via class
var check = new Check();
var check2 = new Check();
check.display();
console.log(Check.bankName);
console.log(check.accNo);
