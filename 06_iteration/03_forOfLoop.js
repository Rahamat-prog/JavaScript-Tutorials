//  use  
//  for in loop - > object 
//  for of loop  - >  array
//  forEach loop -> array

//The for...of loop in JavaScript is used to iterate over iterable objects, such as arrays, strings, sets, maps, and other iterable objects that implement the iterable protocol

//Use for...in loop when you need to iterate over the enumerable properties of an object, including inherited properties.

//Use forEach loop when you need to iterate over array elements and execute a callback function for each element, without creating a new array.

// map - > no duplicate value, all the value is unique, remember the order 
// In JavaScript, the Map object is a collection of key-value pairs where keys can be of any data type. Using the for...of loop, you can iterate over the entries, keys, or values of a Map.

// [{}, {}, {}]
// ["" , "", ""]


// syntax
// for (const iterator of object) {
    
// }


// const arr = ["Mainul", "hasib", "Mustafa"]

// for (const name of arr) {
//     console.log(name); // Mainul hasib Mustafa
// }



// const arr = ["Mainul", "hasib", "Mustafa"]

// for (const name of arr)   // here without backet  also can do ---> its call arrow function without backet 
//     console.log(name);



// const greeting = "Hello World"

// for (const greet of greeting) {
//     console.log(`the the name is ${greet}`);
    
// }


//  here print hello world in one line using for...of loop 

// const greeting = 'Hello World'
// let fullGreeting = ''
// for (const greet of greeting) {
//     fullGreeting+= greet
// }
// console.log(fullGreeting);


// const myMap = new Map()  // create map

// myMap.set('IN', "India")
// myMap.set('US', "United State of America")
// myMap.set('FR', "Franch")
// myMap.set('AUS', "Austolia")

// // console.log(myMap);

// for (const [key,value] of myMap) {   // here we use for of  loop inside map
//     console.log(key, ":-",  value);
// }


//  we can't use for of loop inside Object 
// const myObj  = {
//     game1 : "FreeFire",
//     game2 : "PUBG"
// }

// for (const [key, value] of myObj) {
//     console.log(key, ":-",  value); // TypeError: myObj is not iterable
// }


// const numbers = [1, 2, 3, 4, 5]; 
// let sum = 0;

// for (const num of numbers)
//     sum += num;

// console.log(`Sum of all elements: ${sum}`);  // here withut backet print like ->
//  Sum of all elements: 15
