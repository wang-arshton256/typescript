var levels: number[] = [20, 30, 45, 98, 65, 741]
console.log(levels.toString);  // Changes to string
console.log(levels.join(" ")); // Joins entries
console.log(levels.slice(3)); // Deletes starting from index of 3
console.log(levels.toString());
levels.splice(2, 3, 5, 965); // Deletes and asigns ew values to array
console.log(levels.toString());