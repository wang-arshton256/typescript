var expiryDate = new Date();
console.log(expiryDate);
var expiryDate1 = new Date("2025-12-30"); // To set a particula date, pass the values needed
console.log(expiryDate1.getDay()); // To get the current day of the week beginging from index 0 which is sunday to index 6
console.log(expiryDate1.getDate()); // To get current date 
console.log(expiryDate1.getHours()); //  To get current time in hours
console.log(expiryDate1.getMinutes()); // To get current time in minutes
console.log(expiryDate1.toTimeString()); // To get current time and pas it as a string
expiryDate.setDate(20); // To set date and the day
console.log(expiryDate);
