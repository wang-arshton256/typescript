var studentNames = ["John", "Bob", "Jane"];
var studentScores = {};
studentScores['John'] = 100;
studentScores['Wang'] = 110;
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}
