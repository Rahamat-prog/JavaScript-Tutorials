"use strict" //treat all JS code as newer version 

//alert(2 + 2) // its give error because we are using node.js not Browser 

//  console.log(3  // we can do but code redability should be high.
// + 3 )

// JavaScript is a dynamic language with dynamic types. 
// Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

// let foo = 42; // foo is now a number
// foo = "bar"; // foo is now a string
// foo = true; // foo is now a boolean

// Variables in JavaScript are declared using one of three keywords: let, const, or var.

//  Datatypes mostly 
// Primitive Data Types - > 
// number  //2 to power 53
// bigint
// string  //2 to power 53 - 1 elements
// boolean
// null  //standalone value 
// undefined
// Symbol => //unique type is function

// //  Non-Primitive Data Types
// object
// function
// array

//example 

let name = "Rahamat"
let age = 24
let isLoggedIn = false 
let state

console.log("number :",typeof age);
console.log("boolen :", typeof isLoggedIn);
console.log("string :", typeof name);
console.log("no value inside state :",state); 
console.log("null type :",typeof null); //object
console.log("type of symbal:",typeof Symbol);  //function
console.log("type of object :",typeof Object);