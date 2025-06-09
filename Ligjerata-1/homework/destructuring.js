//Destructuring Chapter

// 1. Write a program that uses array destructuring to extract the first two elements from an
// array of numbers. Print the extracted values.

const myNumbers = [5,10,15,20,25];
const [first,second] = myNumbers;
console.log("First Number: ",first);
console.log("Second Number: ",second);

// 2.  Create an object representing a book with properties: title, author, and year. Use
//  object destructuring to extract the title and author, and print them.

const book = {
    title: "A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    year: 2018,
}
const {title,author} = book;
console.log("Title: ", title);
console.log("Author: ", author);

// 3. Modify the previous assignment to include default values for title and publisher when
// destructuring. If the publisher property is not available in the object, it should default
// to "Unknown"
const book1 = {
    title1:"",
    author1: "Robert Oliver",
    year1: 2018,
};

const {
    title1: t = "No title yet",
    author1: a = "Unknown",
    publisher = "Unknown"
} = book1;

const title1 = t || "No title yet";
const author1 = a || "Unknown";

console.log("Book title: ",title1);
console.log("Author: ",author1);
console.log("Publisher: ", publisher)

//4. Create a function named sum that uses the rest operator to accept any number of
//  arguments and returns their sum. Call this function with different sets of numbers.

function sum(...numbers){
    return numbers.reduce((total,num)=>total+num,0)
}
console.log(sum(1,1,1)); //3
console.log(sum(2,3,3)); //8
console.log(sum(6,6,6)); //18

// 5. Write a program that creates two arrays and uses the spread operator to merge them
// into a new array. Print the new array.
const array1 = [1,2,3];
const array2 = [4,5,6];
const mergeArray = [...array1, ...array2] //spread operator to merge
console.log("Merged Array: ", mergeArray);

// 6. Create two objects representing a person and a contact. Use the spread operator to
//  create a new object that combines both. Print the new object
const person = {
    name: "Drin Zenuni",
    age: 21,
    profesion: "Network Engineer"
}
const contact = {
    phone: "+38344000000",
    email: "drinzenuni@gmail.com",
    linkedinprofile: "drinzenuni"
}

const persondata = {...person, ...contact};
console.log(persondata);

// 7.  Write a program that demonstrates nested destructuring with an object that contains
//  an array. Create an object with a property grades that is an array, and destructure it to
//  extract the first grade.

const student = {
    name: "Drin Zenuni",
    age: 21,
    grades: [10,9,8,10,9]
};
const {
    grades: [firstgrade, ...allremainingGrades],
    name,
    age
} = student;

console.log("Name:", name)
console.log("First Grade: ", firstgrade)

// 8. Create a program that demonstrates renaming during destructuring. Create an object
// representing a user with properties username and email. When destructuring, rename
// username to user and print both values.

const userData = {
    username: "dzenuni",
    email: 'drinzenuni@gmail.com'
}
//Destructuring
const {username:user,email} = userData; //renaming username to user when destructuring

console.log("Username: ", user);
console.log("Email: ", email)