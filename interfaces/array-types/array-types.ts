// String based interfaces
interface studentName{
    [index: number]: string;
}

var studentNames: studentName = ["John", "Bob", "Jane"];

// Number based interfaces
interface studentScore{
    [index: string]: number;
}

var studentScores: studentScore = {};

studentScores['John'] = 100;
studentScores['Wang'] = 110;

for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}

