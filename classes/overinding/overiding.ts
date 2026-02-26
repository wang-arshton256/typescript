class BMW{
    make: string;
    model: string;
    year: string;

    constructor (make: string, model: string, year: string) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    commonEngineFunc() {
        console.log("Common Func");
    }

    start() {
        console.log("start");
    }


    stop() {
        console.log("stop");
    }
}
class ThreeSeries extends BMW{
    cruiseControlEnabled: boolean;

    cruiseControl() {
        this.cruiseControlEnabled = true;
        console.log("Cruising");
    }
    
    constructor(make: string, model: string, year: string, cruiseControlEnabled: boolean) {
        super(make, model, year);
        this.cruiseControlEnabled = cruiseControlEnabled;
    }

     buttonStart() {
        console.log("buttonStart");
    }
    buttonStop() {
        console.log("buttonStop");
    }
}


class FiveSeries extends BMW {
    parkingAssistEnabled: boolean;

    constructor(make: string, model: string, year: string, parkingAssistEnabled: boolean) {
        super(make, model, year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }

    parkingAssist() {
        this.parkingAssistEnabled = true;  
        console.log("Parking");
    }
     remoteStart() {
        console.log("Remote Start");
    }

    remoteStop() {
        console.log("Remote Stop");
    }
}

var threeSeries = new ThreeSeries("BMW", "328I", "2018", false);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();
threeSeries.buttonStart();
threeSeries.buttonStop();


var fiveSeries = new FiveSeries("BMW", "328I", "2018", false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.remoteStop();
fiveSeries.remoteStop();
fiveSeries.parkingAssist() 
