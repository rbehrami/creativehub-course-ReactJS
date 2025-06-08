//Functions
// 1. Create a simple function called greet that prints a welcome message to the console.
//  Then, call the function multiple times to demonstrate how functions can be reused.

function greet(){
    console.log("Welcome!");
}
greet();
greet();
greet();
greet();

// 2. Write a function called multiply that takes two parameters (numbers) and prints their
//  product. Call the function with different arguments to show how parameters work.

function addition(a,b){
    console.log(a+b);
}
addition(2,4);
addition(5,3);
addition(6,4);
addition(8,4);

// 3. Write a function called add that accepts two parameters, calculates their sum, and
// returns the result. Call the function and store the return value in a variable to
// demonstrate the difference between returning and non-returning functions.

function add(num1,num2){
    return num1+num2;
}
let result = add(3,2);
console.log("Result is: ", result);

// 4. Write two functions: one that simply prints the result of multiplying two numbers, and
// another that returns the result of multiplying two numbers. Call both functions and
// explain the difference between returning a value and just printing it.


//This function simply prints the result
function multiply(num1,num2){
    console.log("Printed result",num1*num2);
}

//This function simply returns the result
function multiply1 (num1,num2){
    return num1*num2;
}

//We call the function multiply that only prints the result 
multiply(2,3);

// Call the returning function and store the result
let result1 = multiply1(2,3);
console.log("Returned result: ", result1)

// 5.  Convert a regular function into an arrow function. Write a function called square that
//  accepts a number and returns its square. First, write it as a regular function, then
//  convert it to an arrow function

//Regular function
function squareRegular(a){
    return a*a;
}

//Arrow function
const squareArrow = a=>a*a;

console.log("Regular function result: ",squareRegular(2));
console.log("Arrow function result",squareArrow(2));

// 6. Write a function called greetUser that accepts two parameters: name and greeting. Set
//  the greeting parameter to a default value of "Hello" if it is not provided. Demonstrate
//  how default parameters work by calling the function with and without passing the
//  greeting argument.


function greetUser(name,greeting="Hello"){
    console.log(`${greeting}, ${name}`);
}
greetUser();

function greetUser1(name = "Rasim",greeting="Hello"){
    console.log(`${greeting}, ${name}`);
}
greetUser1();
greetUser1('Ragip'); //Calling function with one parameter 
greetUser1('Arta', 'Hi'); //Calling function with both parameters

// 7. Write a function called calculateTotalPrice that takes two parameters: price and
// quantity. The function should return the total price by multiplying these values. Then,
// call the function with different numbers to see how multiple arguments work.

function calculateTotalPrice(price,quantity){
    return price*quantity;
}
console.log(calculateTotalPrice(1.5,10));
console.log(calculateTotalPrice(2,8));
console.log(calculateTotalPrice(5,4));

// 8. Create an anonymous function that adds two numbers, and assign it to a variable
// called sum. Then, convert it into an arrow function. This will help students understand
// the difference between anonymous functions and arrow functions.

//Anonymous function is a function without a name
const sum = function(a,b){
    return a+b;
}
console.log(sum(2,2));

//when in the body we have a single return expression this is short and simplified method
const sumt = (a, b) => a + b;
console.log(sumt(3, 4));

// 9. Write a function called gradeCalculator that accepts a score and returns a grade based
// on the score. The function should return different grades based on score ranges using
// multiple return statements.

function gradeCalculator(score){
    if(score>=90){
        return  ("Your Grade is A");
    }
    else if(score>=80){
        return ("Your Grade is B");
    }
    else if(score>=70){
        return ("Your Grade is C");
    }
    else if(score>=60){
        return ("Your Grade is D");
    }
    else{
        return ("You Failed!. Good Luck next time.");
    }
}
console.log(gradeCalculator(59));
console.log(gradeCalculator(65));
console.log(gradeCalculator(95));