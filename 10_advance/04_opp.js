//  Object Literal: You can create an object using an object literal. For instance:

// const user = {
//     userName: "Hitesh",
//     isLoggedIn: true,
//     loginCount: 8,

//     getUserDetails: function() {
//         console.log('Got user details from the database');
//         return `The name of the user is ${this.userName} and his loging time is ${this.loginCount}` // another way
//     }
// }
// console.log( user.userName);
// console.log(user.getUserDetails());


// Object Constructor: You can also create objects using a constructor function

// function person(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName

//     this.greeting = function() {
//         console.log(`Welcome ${this.firstName }`);
//     }
//     return this // // Explicitly returning the newly created object
// }

// const person1 =  new person('Rahamat', 'Shaikh')
// const person2 = new person('Hitesh', 'Choudhry')

// console.log(person1.constructor); // person1.constructor logs the person function itself, indicating that person1 was created using the person constructor function.
// console.log(person2);
// console.log(person2.greeting());


// JavaScript being a prototype-based language understand its through object constructor
// Define a Person object constructor

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// // Add a method to the Person prototype
// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };
// // Create a new instance of Person
// let person1 = new Person('Alice', 30);
// let person2 = new Person('Bob', 25);

// // Call the method defined on the prototype
// person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
// person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.



//* JavaScript objects have an internal link to another object called a prototype. 
//* This forms a chain of objects, allowing inheritance of properties and methods.

// JavaScript being a prototype-based language in a simple and memorable way using an example.
// understand its through prototype object

// Define a prototype object 
// const animal = {
//     type : "animal",
//     sound : 'make a sound',
//     makeSound : function() {
//         console.log(this.sound);
//     }
// }
// // create new object using object.create
// const dog = Object.create(animal)
// dog.sound = 'woof'

// // create new object using object.create
// const cat = Object.create(animal)
// cat.sound = 'meow'

// // use the inherited method
// dog.makeSound() // woof |  JavaScript first looks for makeSound() on dog (it doesn't find it there), then it looks up the prototype chain and finds makeSound() on animal, allowing it to execute and print 'Woof!'.
// cat.makeSound() // meow
