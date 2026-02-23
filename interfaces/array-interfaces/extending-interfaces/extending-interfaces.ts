interface Exterior{
    color: string;
    numOfDoors: number;
}

interface Interior{
    seats: number;
    auto: boolean;
}

interface Car extends Exterior, Interior{
    make: string;
    model: string;
    year: number;
}

var myCar: Car = {
    make: "Honda",
    model: "Wagon",
    year: 2025,
    color: "Black",
    numOfDoors: 5,
    seats: 5,
    auto: true,
}

console.log(myCar);