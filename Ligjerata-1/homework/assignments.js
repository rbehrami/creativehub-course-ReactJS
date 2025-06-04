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

//=========================================================================================
//2. Write a program that converts temperatures from Celsius to Fahrenheit. Choose a suitable type of variable for the conversion factor and the Celsius temperature. Display the result of the conversion and then modify the Celsius value to perform another conversion.
//we have a formula to convert Celsius to Fahrenheit Fahrenheit = (Celsius x 9/5) + 32
//For example we have 25 Celsius and we want to convert into Fahrenheit

const conversionFactor = 9/5;
let celsius = 25;
let fahrenheit = (celsius * conversionFactor) + 32; 
console.log(`${celsius}°C is equal with ${fahrenheit}°F.`);

//Modify celsius value to perform another conversion
celsius = 10;
fahrenheit = (celsius * conversionFactor) + 32;
console.log(`${celsius}°C is equal with ${fahrenheit}°F.`);
console.log("=====================End Assignmet 2====================")
//=========================================================================================

//3. Create a simple inventory system for a store that tracks product quantities. Choose the appropriate variable types for the product quantities and a fixed tax rate. Update the product quantities as if customers are buying products and print the results.

//Declaring a variable to store tax rate (tax rate does not change)
const fixedTaxRate = 0.18; //this mean 18%

//Inventory quantities in the store
let apple = 20;
let lemon = 15;
let cherry = 22;
let banana = 35;

//print the quantity to see
console.log("Quantity for each product")
console.log("Apples: ", apple);
console.log("Lemons: ", lemon);
console.log("Cherries: ", cherry);
console.log("Bananas: ", banana);

//Products sold out
let appleSoldOut = 5;
let lemonSoldOut = 6;
let cherySoldOut = 2;
let bananaSoldOut = 8;

//Uptade Inventory
apple -= appleSoldOut;
lemon -= lemonSoldOut;
cherry -= cherySoldOut;
banana -= bananaSoldOut;

//Print products after updated
console.log("Quantity for each product after updated")
console.log("Apples: ", apple);
console.log("Lemons: ", lemon);
console.log("Cherries: ", cherry);
console.log("Bananas: ", banana);

//set a price for a product
let applePrice = 1.8;
let lemonPrice = 0.8;
let cherriePrice = 8;
let bananaPrice = 1.20;

let subtotalSale = (apple*applePrice)+(lemon*lemonPrice)+(cherry*cherriePrice)+(banana*bananaPrice);
let taxRate = subtotalSale * fixedTaxRate;
let totalSum = subtotalSale+taxRate;
console.log("Total sale without tax: ", subtotalSale);
console.log("Tax sum: ", taxRate);
console.log("Total Sum with tax: ", totalSum);

console.log("=========================== End of Assignmet 3 ==================================")

console.log("---- Assignment 4 ---- \n")
// 4. Write a program that stores a list of your favorite things. Decide which favorites are likely to change and which are not. Update one of the values during the program and print the list before and after the change.

//List of my favorit things

const favoritSport = "Football"; // this will not change
const favoritColor = "Dark Blue"; // this will not change
let favoritCar = "BMW"; //this can be changed later
let favoritJob = "Network Administrator"; //this can be changed later
let favoritFood = "Pizza"; //this can be changed later
let favoritPlace = "Saranda"; //this can be changed later

//Print all original my favorit things
console.log("My Favorit Sport: ", favoritSport);
console.log("My Favorit Color: ", favoritColor);
console.log("My Favorit Car: ", favoritCar);
console.log("My Favorit Job: ", favoritJob);
console.log("My Favorit Food: ", favoritFood);
console.log("My Favorit Place: ", favoritPlace);

console.log("After updated variable favoritJob")
//value of variable favoritJob will be updated
favoritJob = "Front End Developer";

console.log("My Favorit Sport: ", favoritSport);
console.log("My Favorit Color: ", favoritColor);
console.log("My Favorit Car: ", favoritCar);
console.log("My Favorit Job: ", favoritJob); //updated
console.log("My Favorit Food: ", favoritFood);
console.log("My Favorit Place: ", favoritPlace);

