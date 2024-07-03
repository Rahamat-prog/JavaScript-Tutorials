// This example illustrates how function declarations in JavaScript can be called before they are defined due to hoisting.

console.log(addNum(2, 3))

function addNum(a, b) {
    const sum  = a + b 
    return sum
}


//Function expressions in JavaScript are not hoisted, meaning they cannot be called before they are defined. If you attempt to call a function expression before it is defined, it will result in a ReferenceError. However, I can show you how to correctly define and use a function expression.



{
    // Trying to log the variables before declaration
    console.log("Before declaration:");
    try {
      console.log(varVariable); // undefined, due to hoisting
    } catch (e) {
      console.log(e.message); // ReferenceError for let and const
    }
    
    try {
      console.log(letVariable); // ReferenceError
    } catch (e) {
      console.log(e.message); // ReferenceError for let and const
    }
  
    try {
      console.log(constVariable); // ReferenceError
    } catch (e) {
      console.log(e.message); // ReferenceError for let and const
    }
  
    // Variable declarations
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";
  
    // Logging the variables after declaration
    console.log("After declaration:");
    console.log(varVariable); // I am a var variable
    console.log(letVariable); // I am a let variable
    console.log(constVariable); // I am a const variable
  }
  


