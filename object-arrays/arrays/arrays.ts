var courses:any = ["Angular", "React", "es6", "JMS"];
courses.push("Python, C++");
courses.push(54);

console.log(courses);

for (var i = 0; i < courses.length; i++){
    console.log(courses[i]);
}

// Destructuring
var x = courses[0];
var y = courses[1];

var [a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);
