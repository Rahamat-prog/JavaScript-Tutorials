// Array : JavaScript arrays are resizable and can contain a mix of different data types.

// Create an array three way 
// const fruits = ["Banana", "Apple", "Orange", 12, 12.65] // first way
// const myFruit = new Array("Banana", "Apple", "Orange", 12, 12.65) // second way
// const anotherWayToCreateArray = "Banana, Apple" .split(" ") // third way


// console.log(fruits); // [ 'Banana', 'Apple', 'Orange', 12, 12.65 ]
// console.log(myFruit);
// console.log(anotherWayToCreateArray);
// console.log(fruits.length);  // 5


// const sports = []
// sports.push("Footbal", "Cricket", "Racket")
// sports[3] = "Dice" // add extra element 
// console.log(sports); // [ 'Footbal', 'Cricket', 'Racket', 'Dice' ]
// console.log(Object.keys(sports)); //[ '0', '1', '2', '3' ] | return index value


// for each method 
// const colors = ["Red", "Blue", "Yellow",]
// colors[4] = "Green"
// colors.forEach((item,index) => {    // forEach callback function are typically in the order (item, index)
//     console.log(`${index} : ${item}`);  // 
// })



// Access an array's item by its index
// const multipleFruits = ["Apple", "Banana", "Apple", "Mango"]
// console.log(multipleFruits[0]); // Apple
// console.log(multipleFruits[multipleFruits.length - 1]);  // Mango |access last element
// console.log(multipleFruits[99]);  // undefined


// Find the index of an item in an array
// const randomFruits = ["Apple", "Banana", "Apple", "Mango"]
// console.log(randomFruits.indexOf("Banana")); // 1


// Check if an array contains a certain item
// const isItemPresent = ["Apple", "Banana", "Apple", "Mango"]
// console.log(isItemPresent.includes("Mango")); // true


// push() method to append a new string to the fruits array.
// const pushMethod = ["Apple", "Banana", "Apple", "Mango"]
// console.log(pushMethod.push("Orange"));  // 5
// const addItem = pushMethod.push("Mango2") //another way
// console.log(pushMethod);  // [ 'Apple', 'Banana', 'Apple', 'Mango', 'Orange', 'Mango2' ]
// console.log(addItem); // 6 


// Remove the last item from an array
// const arry1 = ["Apple", "Banana", "Orange"];
// const removedItem = arry1.pop();
// console.log(arry1); // ["Apple", "Banana"]
// console.log(removedItem);  // Orange

// Syntax
// array.splice(start, deleteCount, item1, item2, ..., itemN)
// start: The index at which to start changing the array.
// deleteCount (optional): The number of elements to remove from the array.
// item1, item2, ..., itemN (optional): The elements to add to the array, starting from the start index.


// // Remove the last three elements
// const arry2 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// arry2.splice(arry2.length - 3, 3); // arry2.length - 3 calculates the starting index for the removal, 3 is the number of elements to remove
// console.log(arry2);  // Output: ["Apple", "Banana"]



// Remove first two element
// const arry2 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// arry2.splice(0, 2); // 0 is the starting index, 2 is the number of elements to remove starting from the specified index.
// console.log(arry2);  // Output: ["Strawberry", "Mango", "Cherry"]



// Replace "Strawberry" with "Blueberry"
// const arry2 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// arry2.splice(2, 1, "Blueberry");
// console.log(arry2);  // Output: ["Apple", "Banana", "Blueberry", "Mango", "Cherry"]


/*
    for remove, replace - > splice method 
    remove first item - > shift method 
    remove last item  - > pop method
*/



