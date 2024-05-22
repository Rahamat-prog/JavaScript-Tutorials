// const number = 400 
// console.log(number);

// const anotherNumber = new Number(100) // its confirm that its a number
// console.log(anotherNumber); 

// console.log(anotherNumber.toString().length);   // 3
// console.log(anotherNumber.toFixed(2));  // 100.00 | give two number after decimal

// const decimalNumber = 100.123
// console.log(decimalNumber.toPrecision(3));  // 100 | used to format a number to a specific precision or length

// const bigNumber = 1000000
// console.log(bigNumber.toLocaleString('en-IN')); // print with coma so we can read the number



// // *************** Math  *****************

// console.log(Math);  //Object [Math] {}
// console.log(Math.abs(-9));  // 9 | The Math.abs() static method returns the absolute value of a number.
// console.log(Math.ceil(5.89)); // 6 | always rounds up and returns the smallest integer greater than or equal to a given number.
// console.log(Math.floor(4.9)); // 4 always rounds down and returns the largest integer less than or equal to a given number.
// console.log(Math.round(2.2));  // 2 static method returns the value of a number rounded to the nearest integer
// console.log(Math.min(2, 3, 5, 9));  // 2
// console.log(Math.max(2, 3, 5, 9));  // 9
console.log(Math.random()); // always return the value b/w 0 to 1 
console.log((Math.random() * 10) + 1); // here we can get the value b/w 1 to 10 but not get 0.
// console.log( Math.floor((Math.random() * 10 ) + 1 ) ); // here return without decimal value 



const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min ); // return the value b/w 10 to 20.
console.log(Math.floor(Math.random() ) ); // return the value b/w 10 to 20.

