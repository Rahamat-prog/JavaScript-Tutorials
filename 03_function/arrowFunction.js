'use strict'; 

//Explicit Return: An explicit return is when the function uses the return keyword to specify the value that should be returned from the function.
// An implicit return is when the function does not use the return keyword
// Arrow functions can implicitly return a value if the function body consists of a single expression and does not use curly braces {}.

// Explicit return in a multi-line arrow function
const add = (a, b) => {
   const  sum = a + b;
    return sum;
};

console.log(add(2, 3)); // Output: 5


// Implicit return
// const add = (a, b) => a + b;

// console.log(add(2, 3)); // Output: 5



// about this function 

// const user = {
//     username : "Hitesh",
//     price : 999,

//     welcomeMessage : function() {  // Method in an Object, he welcomeMessage function is defined as a method of the user object.
//          console.log(`${this.username}, welcome to website`);
//         console.log(this);  // The second console.log prints the entire user object, because this is the user object.
//     }

// }

// user.welcomeMessage()
// console.log(this);   // In a browser environment, this in the global scope refers to the window object. // In a Node.js environment, this in the global scope refers to an empty object ({}) when running a module.



// function chai() {
//     let username = "hitesh"
//     console.log(this); //undefine | In strict mode, this is undefined in a regular function when it is called globally.
// }

// chai()  //  When a function is called in the global context (i.e., not as a method of an object), this refers to the global object:


//  Arrow function 
// Yes, when you define an arrow function, you typically need to store it in a variable. This is because arrow functions are expressions, and like any other expression in JavaScript, they produce a value that can be assigned to a variable.

// const chai = () => {
//     let username = "Hitesh"
//     console.log(username);

// }

// chai()




