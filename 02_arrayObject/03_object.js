// Objects can be created using the Object() constructor or the object initializer / literal syntax.
// In JavaScript, objects can inherit properties and methods from other objects through a mechanism called the prototype chain.

// Symbols are often used as unique property keys in objects to avoid property name collisions.
// Every symbol is unique. Even if you create two symbols with the same description, they will be different symbols.
// Properties keyed by symbols do not appear in for...in loops or Object.keys() method, but they can be accessed using Object.getOwnPropertySymbols() and Reflect.ownKeys().

const mySimbol = Symbol("key1") // key1 is a description

// const obj = {
//     [mySymbol]: "value1",
//     prop1: "value2"
// };

// for (let key in obj) {
//     console.log(key);  // Output: "prop1"
// }

// console.log(Object.keys(obj));  // Output: ["prop1"]
// console.log(Object.getOwnPropertySymbols(obj));  // Output: [ Symbol(key1) ]



// literal syntax 
const jsUser = {
    name : "Rahamat",
    "Full name" : "Rahamat Shaikh",
    age : 24, 
    location : "Jaipur",
    Email : "rahamat@112",
    isLoggedIn : false,
    [mySimbol] : "Mykey1",
    lastLoginDays : ["Monday", "Friday"]
}

// console.log(jsUser.name); // Rahamat | dot notation
// console.log(jsUser["Full name"]); //Rahamat Shaikh,|  backet notation.
// console.log(jsUser["age"]); //24
// console.log(typeof jsUser[mySimbol]); // string   but normaly type of symbal is symbal
// console.log(jsUser);

//change the email 
jsUser.Email = "rahamat@000"

//  Object.freeze(jsUser) // freeze the object no way to change the value inside key 
// jsUser.Email = "dnahd@323"

// console.log(jsUser);



// // using greeting method.
// jsUser.greeting = function() {
//     console.log("Hello JS User");
// }

// jsUser.greetingTwo = function() {
//     console.log(`Hello JS User ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


// seal meathod - > only oyu can  update 
// freeze method -> not able to do delete push and update 
