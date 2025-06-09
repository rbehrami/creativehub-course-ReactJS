//Arrays Chapter
// 1. Write a program that creates an array of your favorite fruits. Then, print the first and
// last fruit in the array.

//we have many ways to do that but this is one of the methods using length properties we can use also Using Array.pop() and Array.shift() Method, Using Array.slice() Method etc.

let fruits = ["Apple", "Cherry", "Watermelon", "Banana"];

let first = fruits[0];
let last = fruits[fruits.length-1];
console.log(first,last);

//Slice() Methode
let fruits1 = ["Apple", "Cherry", "Watermelon", "Banana"];
let firstf = fruits1.slice(0,1);
let lastf = fruits1.slice(-1);
console.log(firstf,lastf);

// 2. Write a program that adds a new fruit to the beginning and the end of an array of
// fruits. Then, remove a fruit from the beginning and end.

let myFruits = ["Apple", "Cherry", "Watermelon", "Banana"];
myFruits.unshift("Orange"); //unshift(): Adds one or more elements to the beginning of an array. 
myFruits.push("Orange"); //push(): Adds one or more elements to the end of an array. 
console.log(myFruits);

myFruits.shift() //shift(): Removes the first element of an array.
myFruits.pop() //pop(): Removes the last element of an array.

console.log(myFruits);

// 3. Create a program that loops through an array of numbers using a for loop and prints
//  only the even numbers.

// Initializing numbers array
let numbers = [2,3,5,7,10,12,13, 23, 32,39];

// Declaring empty Even array
let evenArray = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       evenArray.push(numbers[i]);
}
console.log(`Print all even numbers: , ${evenArray}`);

// 4. Write a program that creates a new array where each number in the original array is
// multiplied by 2.

//Using map method to create a new array
const myNumbers = [1,3,4,6,7,9,10];
const newArrayNumbers = myNumbers.map(a=>a*2);
console.log(newArrayNumbers)

// 5. Write a program that filters an array of numbers to create a new array that contains
//  only numbers greater than 5

const numbersRange = [1,2,4,5,6,7,8,9,11,12];
const result = numbersRange.filter(greaterThenFive);

function greaterThenFive(numbersRange){
    return numbersRange > 5;
}
console.log(result);

// 6. Create a program that finds the first number in an array that is divisible by 3.

const numbersArray = [1,3,4,5,8,9,11,12];
const divisibleByThree = [];
for(let i=0;i<=numbersArray.length; i++){
    if(numbersArray[i] % 3 === 0){
        divisibleByThree.push(numbersArray[i]);
    }
}
console.log(divisibleByThree);

// 7. Write a program that sorts an array of numbers in ascending order using the sort
// method. Then, reverse the order using the reverse method.

//Sort method
const sortNumAsc = [0,5,9,1,10,6,4,8];
sortNumAsc.sort((a,b)=>a-b);
console.log("Ascending Sort: ",sortNumAsc);

//Reverse method
sortNumAsc.reverse();
console.log("Reverse of Ascending: ",sortNumAsc);

// 8. Write a program that loops through an array of cities and prints each city name.

const cityNames = ["Prishtine", "Mitrovice", "Peje","Gjakove", "Prizren","Gjilan"];
for(let i=0;i<=cityNames.length-1;i++){
    console.log(cityNames[i]);
}

// 9. Write a program that removes two elements from the middle of an array. Then, insert
// two new elements into the array at the same position.

