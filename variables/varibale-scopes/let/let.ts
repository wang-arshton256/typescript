// Var is function scoped and can be accessed from outside the block
for (var i = 0; i < 10; i++){
    console.log(i);
    
}
console.log(i);

// Let is block scoped and can not be accessed from outside the block
for (let i = 0; i < 10; i++){
    console.log(i);
    
}
console.log(i);