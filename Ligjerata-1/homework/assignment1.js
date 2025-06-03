//Variables in Javascript
//Assignments
// 1. Create a simple profile using variables to store a person’s name, age, job, and a fun fact. Print the profile information to the console. Consider which variables will change over time and which will stay the same.

//Variable to store profile information
const fullName = "Rasim Behrami"; // The variable fullName is declared with const because will not change later
let age = 40; // The variable age is declared with let because it can be changed later.
let job = "Front End Developer"; // The variable job is declared with let because it can be changed later.
const funFact = "I am faster than Usain Bold."; // The variable funFact is declared with const because we are not going to change this later.

console.log("My Profile"); //Only for printing
console.log("My name: ", fullName);
console.log("My age: ", age);
console.log("My job: ", job);
console.log("My fun fact: ", funFact);

//2. Write a program that converts temperatures from Celsius to Fahrenheit. Choose a suitable type of variable for the conversion factor and the Celsius temperature. Display the result of the conversion and then modify the Celsius value to perform another conversion.

//we have a formula to convert Celsius to Fahrenheit Fahrenheit = (Celsius x 9/5) + 32
//For example we have 25 Celsius and we want to convert into Fahrenheit

let celsius = 25;
const fahrenheit = (celsius * 1.8) + 32; // When we divide 9/5 it gives us the valu 1.8
console.log(`${celsius}°C is equal with ${fahrenheit}°F.`);