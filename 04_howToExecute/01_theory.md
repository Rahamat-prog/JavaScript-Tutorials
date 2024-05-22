# Global execution 
1. Memory creation 
 2. Execution phase 

// The global execution process in JavaScript involves two main phases: memory creation and execution.
// During the memory creation phase, memory is allocated for variables, functions, and the lexical environment.
// During the execution phase, JavaScript executes the code line by line, performing assignments, function calls, and other operations.

//  insite memory creation variable store firs time take - > undefined 
//  for the every function at the line of function call its create again - > memory creation and execution phase 

# JavaScript executes code sequentially from top to bottom.

var greet = "Hello, World!";
console.log(greet);

function sayHello() {
    return "Hello, from the function!";
}

console.log(sayHello());

# Memory Creation Steps
Global Execution Context Created:
The JavaScript engine creates a global execution context

Global Object and this Created:
The global object (window in browsers, global in Node.js) and the this keyword are created.
# Hoisting:
All variable and function declarations are hoisted to the top of their scope.
Variables declared with var are hoisted and initialized with undefined.
Function declarations are hoisted with their entire definition.


// Call Stack:->  greet : "Hello, World!"

// Heap: -> The sayHello function is a reference in the call stack pointing to its definition in the heap.