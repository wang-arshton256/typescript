var student = {
    name: "Wang",
    gender: "Male",
    age: 20,
    tribe: "Gishu"
};
for (var details in student) {
    console.log(details);
    console.log(student[name]);
}
