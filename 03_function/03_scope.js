// JavaScript has the following kinds of scopes:

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
// 

// // scope 
// function testVar() {
//     if (true) {
//         var x = 1;
//     }
//     console.log(x);  // Output: 1 (x is accessible here)
// }

// function testLet() {
//     if (true) {
//         let y = 1;
//     }
//     console.log(y);  // Error: y is not defined (y is block-scoped)
// }
// testVar();
// testLet();


// var: Variables declared with var can be re-declared within the same scope, which can lead to unintended overwriting of variables.
// let and const: These cannot be re-declared in the same scope, providing better error-checking. 

// var c = 10;
// var c = 20;
// console.log(c);  // Output: 20 (re-declaration allowed)

// let d = 10;
// let d = 20;  // Error: Identifier 'd' has already been declared



// // *********************Scope level and mini hoisting in javascript ***********//

// function one() {
//     const username = "hitesh"

//     function two(num1) {
//         const website = "Youtube"
//         console.log(username); // it has access to username due to JavaScript's lexical scoping rules. The output will be "hitesh".
//     }

//     // console.log(website); // ReferenceError
//     two()
// }

// one()
// console.log(username); // ReferenceError



// // ****** intersting **********

// // we did not get any error due to a concept in JavaScript known as hoisting.
// The JavaScript engine hoists the entire function declaration to the top of the scope.
// This allows you to call addone before the actual declaration in the code.

//  console.log(addone(2))

// function addone(num) {  // function defination
//     return num + 1
// }


// // The error occurs in this case because addtwo is defined as a function expression assigned to a variable (storeFunction). Unlike function declarations, function expressions are not hoisted in the same way.
// Only the variable storeFunction is hoisted to the top of its scope, but not the 
// function definition.

// addtwo(5)

//  const  storeFunction = function addtwo(num1) {
//     return num1 + 2
// }



