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