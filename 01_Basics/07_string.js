//String
// The String object is used to represent and manipulate a sequence of characters.

// const name = "Rahamat"
// const repoCount = 10

// console.log(name + repoCount + " " + "that it");
// console.log(`My name is ${name} and my repo count is ${repoCount}`); //this is the best way 

// //another way 

// const gameName = new String("hitech")

// const gameName = ("hitesh-hc-com")

// console.log(gameName);  // hitesh-hc-com
// console.log(gameName[0]);   // h
// console.log(gameName.__proto__);    // {}

// const id = "1234"


// // Methods 

// console.log(gameName.length);   // 13
// console.log(gameName.toUpperCase());    // HITESH-HC-COM
// console.log(gameName.charAt(5));    // h
// console.log(gameName.indexOf("t")); // 2
// console.log(gameName.substring(0, 4));  // hite
// console.log(gameName.slice(3, -4)); // esh-hc


// let newString = "Rahamat  "

// console.log(newString);  // Rahamat
// console.log(newString.trim()); // remove the white space 

// const url = "https://rahamatshaikh.com%20rahamatshaikh"

// console.log(url.replace('%20', '-'));  // https://rahamatshaikh.com-rahamatshaikh

// console.log(url.includes('mainul')); // false | to check the value is available or not


// // Split method 
// The split() method does not change the original string; it returns a new array.
// Syntax
// string.split(separator, limit)
// separator: This is a string or regular expression that determines where each split should occur.
// limit (optional): This is an integer that limits the number of splits to be performed. If provided, the array will contain at most this many elements.



const str = "I am Rahamat Shaikh"

// console.log("space :",str[1]);    // space
// console.log(str);  // I am Rahamat Shaikh
const words = str.split(" ")  //The split method splits the string at each space and  resulting in an array with four elements: 
// console.log(words[1]);  // am
// console.log(words);   // [ 'I', 'am', 'Rahamat', 'Shaikh' ]

// const chars = str.split("")  // Using an empty string "" as the separator splits the string into individual characters.
// console.log(chars);
// console.log(chars[3]); // m 


// const text = "How are you doing today?";
// Limit the Splits
// const myArray = text.split(" ", 3); // The limit 3: This specifies the maximum number of splits to be performed. The resulting array will contain at most 3 elements.







