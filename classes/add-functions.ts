class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerNo: number;
    
    constructor(firstName: string, lastName: string, frequentFlyerNo: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display() {
        console.log(this.firstName+" "+this.lastName+" "+this.frequentFlyerNo);
    }
}

var passenger1 = new Passenger("Wangutusi", "Arshton", 4587);
passenger1.display();

var passenger2 = new Passenger("Walyemwa", "Derick", 4587);
passenger2.display();

