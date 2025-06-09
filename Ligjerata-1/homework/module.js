//Modules Chapter

// 1. Write a module that contains a function called add which takes two numbers as
//  parameters and returns their sum. Export this function from the module.

// We have created a modul in the folder "modules" and created a modul "script" with the name sum-module, from this module we have importet below in the exercise 2, the sum function to calculate the sum of any numbers.

// 2. In another file, import the add function and use it to add two numbers. Print the result
// to the console.
import add,{subtract, multiply, divide} from './modules/math.js';
import {multiplyNumbers as mul}  from './modules/math.js';

const num1 = 3;
const num2 = 7;
const sum = add(num1,num2);
console.log("Addition: ",sum);

// 3. Modify the first module to include additional functions: subtract, multiply, and divide.
//Subtract
const num3 = 4;
const num4 = 8;
const sum1 = subtract(num3,num4);
console.log("Subtract: ",sum1);
//Multiplay
const num5 = 6;
const num6 = 3;
const sum2 = multiply(num5,num6);
console.log("Multiplay: ",sum2);
//Divide
const num7 = 10;
const num8 = 2;
const sum3 = divide(num7,num8);
console.log("Divide: ", sum3);

// 4. In that module, set one of the functions (e.g., add) as the default export. Demonstrate
// how to import it in app.js.
//Example
//we have done in the exercise 3 all the steps are required in this exercise.
// export default add;
// export { subtract, multiply, divide };

// 5. Write a program that imports the multiply function but renames it to mul when
// importing. Use the renamed function to multiply two numbers and print the result.

const result = mul(5,5);
console.log("Multiplication: ",result);

