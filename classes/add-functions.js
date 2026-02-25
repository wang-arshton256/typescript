var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger1 = new Passenger("Wangutusi", "Arshton", 4587);
passenger1.display();
var passenger2 = new Passenger("Walyemwa", "Derick", 4587);
passenger2.display();
