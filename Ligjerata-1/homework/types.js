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

