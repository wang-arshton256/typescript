let cell: string = "123456785";
let re: any = /[0-9]{10}/;   // Any number between 0-9

// Macth to check if they match with the expression created
if (cell.match(re)) {
    console.log("Cell number is valid")
} else {
    console.log("Invalid cell number "+ cell)
}