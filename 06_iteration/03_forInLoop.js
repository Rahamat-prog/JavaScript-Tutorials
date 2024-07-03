//  use  
//  for in loop - > object 
//  for of loop  - >  array
//  forEach loop -> array

//Use for...in loop when you need to iterate over the enumerable properties of an object, including inherited properties.
// it's generally recommended to use regular functions instead of arrow functions for for...in loops.

//The for...of loop in JavaScript is used to iterate over iterable objects, such as arrays, strings, sets, maps, and other iterable objects that implement the iterable protocol

//Use forEach loop when you need to iterate over array elements and execute a callback function for each element, without creating a new array.


// default syntax
// for (const key in object) {
//    if (Object.hasOwnProperty.call(object, key)) {
//       const element = object[key];
      
//    }
// }


// const myObj = {
//     js : "JavaScript",
//     CPP : "C++",
//     Java : "Java",
//     py : "Pythan"
// }

// for (const key in myObj) {
//    console.log(myObj[key]); // JavaScript .... 
// }


// avoid to use for...in loop in array 
// Key Reasons to Avoid for...in with Arrays
// Iterates Over Inherited Properties:->
// The for...in loop iterates over all enumerable properties, including those that are inherited from the prototype chain. This can lead to unexpected behavior if the array or its prototype has additional properties.

Array.prototype.extraProperty = "extra";
const arr = [1, 2, 3];
for (const key in arr) {
    console.log(key);  // Will print "0", "1", "2", "extraProperty"
}


const myArray = ["JS", 'CPP', "Rb", "Py"]

for (const key in myArray) {
   console.log(myArray[key]); //JS cpp Rb py extra
 
}



// In JavaScript, Map objects are specifically designed to work with the for...of loop rather than the for...in loop. 
const myMap = new Map()
myMap.set('IN', "India")
myMap.set('US', "United State of America")
myMap.set('FR', "Franch")
myMap.set('AUS', "Austolia")

console.log(myMap); //  'IN' => 'India', .....

// for (const key in myMap) {
// console.log(key);//here map inside for in loop nothing return. cause map is not iterated
// }