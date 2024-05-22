// Stack and Heap Memory *...............
//  JavaScript automatically allocates memory when objects are created and frees
// it when they are not used anymore (garbage collection).

// JavaScript engines have two places to store data -> heap and stack

// Stack
// Primitive data types and references 
// Size is known at compile time 
// Fixed memory allocated 

// Heap
// Objects and functions
// Size is known at run time
// No limit for object memory

//primative data type = > stack memory
// Non Primative data type = > Heap memory 

// eg of primitive........

// let userName = "Rahamat"
// let anotherUser = userName

// anotherUser = "Rahul"

// console.table([userName, anotherUser])  // Rahamat Rahul


//eg of non primitive data types 

// let userOne = {
//     email : "Hitesh@google.com",
//     upi : "user@ybl"

// }

// let userTwo = userOne

// userTwo.email = "Rahamat@1233"

// console.log(userOne.email);  // Rahamat@1233
// console.log(userTwo.email);  //  Rahamat@1233


