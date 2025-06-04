// //Types in Javascript

// 1. Write a program that demonstrates string concatenation and type coercion in JavaScript. Start by creating variables with different data types, including strings and numbers. Then, try to combine them in different ways using both the + operator and template literals.

//String concatination

const firstName = "Rasim";
const lastName = "Behrami";

//concatenation firstName with lastName
const fullName = firstName + lastName;  //this prints full name without space between
const fullName1 = firstName + " " + lastName; //this double quotes creates a space between
console.log("Full Name : ", fullName); //Print full name without space between
console.log("Full Name: ", fullName1); //Print full name with space between

//Type coercion - combined data types and automation data type conversion

let weight = 83;
console.log(`Pesha ime eshte ${weight}kg`);

// A moment where JavaScript performs type coercion by automatically converting values to the appropriate data type for the operation

let price = 5; //this data type is number
let quantity = "10"; //this data type is string
let total = price * quantity;
console.log("Total Price: ", total);


// 2. Create a program that performs different operations on various data types. Experiment
//  with how JavaScript handles arithmetic, string concatenation, and boolean logic when
//  working with different types of values. You can also demonstrate what happens when
//  you try to add or subtract values of incompatible types

//Arithmetic
let num1 = 10;
let num2 = 15;
console.log("Addition: ", num1+num2);
console.log("Subtraction: ", num1-num2);
console.log("Multiplication: ", num1*num2);
console.log("Division: ", num1/num2);

//String concatenation
let myCity = "Prishtine";
const message = "Mire se vini ne";
const tempMessage = "Temperatura aktuale eshte";
let localTime = 22;
const celsiusSymbol = "°C";

const result = message + " " + myCity +", " + tempMessage + " " + localTime +celsiusSymbol ;
console.log(result);

//Boolean logic
let isoverEighten = true;
let hasDriverLicence = false;
console.log("Is over 18 and has a driver’s license: ",isoverEighten && hasDriverLicence); // to be true, both of them should be true.
console.log("Is over 18 and has a driver’s license: ", isoverEighten || hasDriverLicence); // to be true one of them should be true.

// Adding incompatible types
console.log("String type + Boolean type:", "JavaScript is fun: " + true);
console.log("Number + String:", 80 - "50"); //here happens type coercion for string "50"

