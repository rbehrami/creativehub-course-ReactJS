// 1. Write a simple function called processData that accepts another function (a callback)
// as an argument. The processData function should call the callback function after it
// prints "Processing data...".


function processData(callback){
    callback();
}

//Callback function
function message(){
        console.log("Processing data...");
}
processData(message);


// 2.  Create a function called calculate that accepts two numbers and a callback function.
//  The callback function should handle different operations (such as adding, subtracting,
//  or multiplying the numbers). Use this pattern to demonstrate how callbacks can
//  handle dynamic functionality

function calculate(num1,num2, callbackOperation){
    return callbackOperation(num1,num2);
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiplying(a,b){
    return a*b;
}

console.log("Addition: ", calculate(5, 5, add));
console.log("Subtract: ", calculate(10, 5, subtract));
console.log("Multiplying: ", calculate(20, 5, multiplying));

// 3. Write a function called delayedMessage that uses the setTimeout function to simulate
//  a delay. The function should accept a message and a callback function. After a delay
//  of 2 seconds, it should call the callback and print the message.


// 4. Create a function fetchData that simulates fetching data from a server using a callback
// for success and another callback for failure. The function should randomly decide
// whether the request is successful or not, calling the appropriate callback.