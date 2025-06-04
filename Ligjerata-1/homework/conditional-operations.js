// Write a program that checks whether a person is old enough to vote. Use an if-else
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
    console.log("You can vote. You are Kosovo Citisen");
}else{
    console.log("You can't vote. You should be Kosovo Citisen");
}