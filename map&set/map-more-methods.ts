var studentScore = new Map([["John", 25], ["Mary", 70], ["Peter", 170]]);
console.log(studentScore);
console.log("John's score is " + studentScore.get("John")); // Get to access student score
studentScore.set("Mary", 98); // Set to re assign value
console.log(studentScore.size); // Size To check number of records stored
console.log(studentScore.delete("Peter")); // To delete value
console.log(studentScore.has("Peter")); // Has to check is Value Mary is stored in objected
// studentScore.clear(); // Cleart o delete values
console.log(studentScore);
console.log(studentScore.keys());

// Gives an iterator of all keys with their values
for (let key of Array.from(studentScore.keys())) {
    console.log(key);
    console.log(studentScore.get(key))
}

console.log(studentScore.values()); // To get values
console.log(studentScore.entries()); // To get entries