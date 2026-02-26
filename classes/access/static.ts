class Check {
    static bankName: string = "Bank of America"; //     Use static property, use the static keyword
    customerName: string;
    accNo: number;
    routingNo: number;

    // Methods to access objects
    display() {
        check.accNo = 918815151;
        console.log(check.accNo);
    }
}

Check.bankName = "BOA";   // ✅ Access via class

var check = new Check();
var check2 = new Check();
check.display();

console.log(Check.bankName);
console.log(check.accNo);