let studentScore = new Map([["John", 25], ["Mary", 70], ["Peter", 170]]);
console.log(studentScore);
console.log("John's score is " + studentScore.get("John")); // Get to access student score
studentScore.set("Mary", 98); // Set to re assign value
console.log(studentScore.size); // Size To check number of records stored
console.log(studentScore.delete("Peter")); // To delete value
console.log(studentScore.has("Mary")); // Has to check is Value Mary is stored in objected
studentScore.clear(); // Cleart o delete values
console.log(studentScore);