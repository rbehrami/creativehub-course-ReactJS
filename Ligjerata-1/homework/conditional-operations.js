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


// 4. Create a program that asks for the day of the week and prints whether it's a weekday
//  or the weekend using a switch statement.

let day = "Saturday";

switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(`${day} is a weekday`);
        break;
    case "Saturday":
    case "Sunday":
         console.log(`${day} is a weekend`);
        break;
    default:
        console.log("Your entry day is invalid");
};



// 5. Write a program that assigns roles based on a person's input. Use a switch statement
//  to assign a role to a user (e.g., "admin", "editor", "viewer"). Include a default case for
//  any invalid role input.

let role = "editor";
switch(role){
    case "admin":
        console.log("Welcome Admin! You have full access");
        break;
    case "editor":
        console.log("Welcome Editor! You can edit content");
        break;
    case "viewer":
        console.log("Welcome Viewer! You can view content");
        break;
    default:
        console.log("Invalid role. Please enter admin, editor, or viewer.");
}