//Looping in Javascript
// 1.Write a program that prints the numbers from 1 to 10 using a for loop.

for(let i=1;i<=10;i++){
    console.log(i)
}

// 2. Create a program that iterates over an array of colors and prints each color to the
//  console using a for loop.

const colors = ["green", "red", "black", "blue", "yellow"];
for (let i=0;i<colors.length; i++){
    console.log(colors[i]);
}

// 3. Write a program that prints a multiplication table for numbers 1 through 5 using
//  nested loops.

for(let i=1;i<=5;i++){
    console.log(`Multiplication Table for ${i}: `);
    for(let j=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

// 4. Write a program that finds the first number divisible by 7 between 1 and 50. Use a for
//  loop and the break statement to exit the loop as soon as a number is found.

for(let i=1; i<=50;i++){
    if(i % 7===0){
        console.log("The first number divisible by 7 is: ",i)
        break;  //this line of code stop the loop after finds the first number divisible by 7, if we remove this then we will have all numbers that are divisable by 7.
    }
}