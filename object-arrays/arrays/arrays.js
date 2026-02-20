var courses = ["Angular", "React", "es6", "JMS"];
courses.push("Python, C++");
courses.push(54);
console.log(courses);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
// Destructuring
var x = courses[0];
var y = courses[1];
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
