//1. Write a program that checks whether a person is old enough to vote. Use an if-else
//  statement to compare the person's age with the voting age (18). Depending on the
//  result, print whether the person is eligible to vote or not.

//first example
const votingAge = 18;
let personAge = 14;
if(personAge >= votingAge){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}
//second example
const votingAge1 = 18;
const resident = "Kosovo";
let personsAge = 26;
let personResident = "Germany";
if(votingAge1>=18 && (resident===personResident)){
    console.log("You can vote. You are Kosovo citisen");
}else{
    console.log("You can't vote. You should be Kosovo citisen");
}

// 2. Write a program that checks a student’s grade and assigns a letter grade based on their
// score using if, else if, and else. Students should input their score, and the
// program will output the corresponding grade.

let scorePoints = 91;

if(scorePoints >=90){
    console.log(`Your grade is A`);
}else if(scorePoints >=80){
    console.log(`Your grade is B`);
}else if(scorePoints >= 70){
    console.log(`Your grade is C`);
}else if(scorePoints >= 60){
    console.log(`Your grade is D`)
}else{
    console.log(`Your grade is F. You have failed`);
}


// 3. Write a program that determines if a person is eligible for a driving license. First,
//  check if the person is old enough (18 or older). If they are, check if they passed a
//  driving test. Use nested conditionals (if inside another if) to handle this scenario.

let candidatAge = 19;
let passedTest = false;
if(candidatAge >=18) {
    console.log(`Candidat is ${candidatAge} years old. It is eligible for a driving license`);
    if(passedTest){
        console.log(`Candidat status for passing test is ${passedTest}`);
    }else{
        console.log("You are old enough, but you need to pass the driving test.");
    }
}else {
    // Age requirement not met
    console.log("You are not eligible. You must be at least 18 years old.");
}