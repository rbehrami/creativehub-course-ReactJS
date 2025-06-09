//Objects Chapter
// 1. Write a program that creates an object to represent a car. The object should have
//  properties for make, model, and year. Print the object to the console.

const car = {
    make: "Volkswagen",
    model: "Golf 8",
    year: 2021,
}
console.log("Car representing: ", car);

// 2. Using the car object you created, write a program that prints the value of the model
//  and year properties using both dot notation and bracket notation.

//Using dot notation
console.log("Dot notation")
console.log("Model: ", car.model);
console.log("Year: ", car.year);
//Using bracket notation 
console.log("Bracket notation")
console.log('Model: ', car["model"]);
console.log('Year; ', car["year"]);

// 3. Write a program that adds a new property color to the car object and then removes the
//  year property. Print the object after each operation.

const car1 = {
    make: "Volkswagen",
    model: "Golf 8",
    year: 2021, 
}
//Add a new property to the object color: Blue
car1.color = "Blue";
console.log("Add property color",car1);

//Removes the property from the object
delete car1.year;
console.log("Removed property year",car1)

// 4. Extend the car object by adding a method called getCarInfo that returns a string
//  containing the car’s make and model. Call this method and print the result.
const car2 = {
     make: "Volkswagen",
    model: "Golf 8",
    year: 2021, 

    getCarInfo: function(){
        return `Make: ${car2.make}, Model: ${car2.model}`;
    }
};
console.log("",car2.getCarInfo());

// 5. Write a program that creates an object to represent a person. The person object should
// have properties for name, age, and an address object. The address object should have
// properties for street, city, and country. Access and print the street and country of the
// person's address

const person = {
    name: "Dibran Fylli",
    age: "52",
    address:  {
        street: "Rr. Rrustem Statovci",
        city: "Prishtine",
        country: "Kosove"
    }
}
console.log("Street: ",person.address.street);
console.log("Country: ",person.address.country);

// 6. Write a program that creates a student object with properties for name, age, and an
// array of grades. Print the student's average grade.

const Student = {
    name: "Drin Zenuni",
    age: 20,
    grades:[10,10,10,10,10,7,10,10,10,8,10,9],
};
const total = Student.grades.reduce((sum,grade)=>sum+grade,0);
const average = total/Student.grades.length;

console.log("Average grade is: ",average);