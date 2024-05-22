/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function(Object Constructor). This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// function muitipleBy5(num) {
//     return num * 5
// }
// muitipleBy5.power = 2

// console.log(muitipleBy5(5)); 25
// console.log(muitipleBy5.power); // 2 
// console.log(muitipleBy5.prototype);  // {}



// function createUser(username, score){
//     this.username = username;
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
//     console.log(`the new score is ${this.score}`);

// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score} of the ${this.username}`);
// }

// const chai = new createUser("chai", 25)
// const tea = new createUser("tea", 250)

// chai.printMe()  // price is 25 of the chai
// tea.increment()




// let myName = 'Hitesh   '
// console.log(myName.truelength);  // undefined


// let myHeroArray = ['Thar', 'SpiterMan']
// let myHeroObject = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower : function() {
//         console.log(`Spider man power is ${this.spiderman}`);
//     }

// }

// Object.prototype.hitesh  = function() {
//     console.log(`Hitesh is present all object `);
// }

// Array.prototype.heyHitesh  = function() {
//     console.log(`Hitesh says hello`);
// }

// myHeroObject.hitesh() 
// myHeroArray.hitesh()  // this array can access the hitesh method through object.
// myHeroArray.heyHitesh()  
// myHeroObject.heyHitesh()  // this object can't access heyHitesh method


// defines several JavaScript objects using object literals and prototype inheritance.
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // __proto__ property, meaning it will inherit properties like isAvailable from TeachingSupport.
}

// Teacher will inherit properties and methods from User.
Teacher.__proto__ = User

// // modern syntax another way
Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport will inherit properties and methods from Teacher.


// String object in JavaScript by adding a custom method trueLength() to its prototype
// let anotherUsername = "ChaiAurCode     "
// console.log(anotherUsername.length); // 16 

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength() // True length is: 11
// "hitesh".trueLength() //hitesh True length is: 6
// "iceTea".trueLength() // iceTea True length is: 6


