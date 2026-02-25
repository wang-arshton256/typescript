var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    return Passenger;
}());
var passenger1 = new Passenger("Wangutusi", "Arshton", 4587);
console.log(passenger1.firstName + " " + passenger1.lastName + " " + passenger1.frequentFlyerNo);
var passenger2 = new Passenger("Walyemwa", "Derick", 4587);
console.log(passenger2.firstName + " " + passenger2.lastName + " " + passenger2.frequentFlyerNo);
