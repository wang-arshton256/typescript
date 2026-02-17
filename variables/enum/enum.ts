enum Gender{
    Male,
    Female
}


console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]); // checking for values at index 0
console.log(Gender[1]); // checking for values at index 1

enum Weekends {
    Saturday = 6, // You can assign an enum a value
    Sunday = 7
}

console.log(Weekends[6]);
console.log(Weekends[7]);