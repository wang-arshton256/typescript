var cell = "123456785";
var re = /[0-9]{10}/;
if (cell.match(re)) {
    console.log("Cell number is valid");
}
else {
    console.log("Invalid cell number " + cell);
}
