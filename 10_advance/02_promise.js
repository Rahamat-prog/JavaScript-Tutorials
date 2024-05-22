import fetch from "node-fetch";
// const fetch = require('node-fetch'); // Import node-fetch


// in the past developer use Q or bluebird now promise is coming
// in the past bydefault use async but good so developer use in the past Q or bluebird

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A promise represents a value that may be available now, or in the future, or never.

// do an async task
// DB call,cryptography, network

//A promise has three states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Creating the Promise
const promiseOne = new Promise(function(resolve, reject) {  // Executor Function
    setTimeout(function() { //  Inside the executor function setTimeout is used to simulate an asynchronous operation that completes after 1 second.
        console.log("asyne task is completed");
        resolve() // The resolve() function is called to transition the promise from the pending state to the fulfilled state. This indicates that the asynchronous task has been completed successfully.

    }, 1000)
   
})
// The then() method is used to specify what should happen when the promise is fulfilled. It takes a callback function that will be executed once the promise is resolved.

promiseOne.then(function() {
    console.log("promise  consumed");
})


// here without variable 
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("asyne task 2 completed");
        resolve()
    }, 1000)
}).then(function() {
    console.log("asyne task 2 is consumed");
})


// // 3rd promise 
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("asyne task three is completed");
        resolve({userName: 'hitesh', email: "hitesh@example.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log('asyne task three consumed');
    console.log(user);
})


// promise four ex 
const promisefour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false 
        if(!error) {
            resolve({userName: "Hitesh", password: "123"})
        }else{
            reject("something error")
        }
    }, 1000)
})

promisefour.then((user)=> {
    console.log(user);
    return user.userName
    
} ).then((userName)=> {
    console.log(userName);
} ).catch( (error) => {
    console.log(error);
}).finally( () => console.log("The promise is either resolve or reject") )


// promise 5 handle by async/ await insted of then/catch
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({userName: "javaScript", password: "123"})
        }else{
            reject("something error")
        }
    }, 1000)
})

// //. It also shows how to consume the promise using async/await syntax with proper error handling 
// //using try and catch. This approach makes asynchronous code more readable and easier to understand compared to using traditional promise chaining (then and catch).

async function consumePromiseFive() {
    // Try-Catch Block: This block is used to handle the promise's resolved and rejected states.
   try {
    const response =  await promiseFive // The await keyword is used to wait for promiseFive to settle (either resolve or reject).
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()


// using the fetch API to make an HTTP GET request to the GitHub API,
async function getAllUsers() {
   try {
    const response =  await fetch('https://api.github.com/users/hiteshchoudhary')
    if (!response.ok) {
        throw new Error('Network response is not ok')
    }else{
        // console.log(response);
    const data = await response.json()
    console.log(data);
    }
    
   } catch (error) {
    console.log("error ", error);
   }
}

getAllUsers()


//another approach to handle the same asynchronous HTTP GET request using the fetch API,
// but it uses the .then() method instead of async/await

// The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json()
} ).then((data)=> {
    console.log(data);
} ).catch((error)=> {
    console.log("error", error);
} )




// async function uploadMultiple(formData) {
//     try {
//         // here we can spicify the particullar request from the API using fetch api.
//       const response = await fetch("https://example.com/posts", {
//         method: "POST", 
//         body: formData,
//       });
//       const result = await response.json();
//       console.log("Success:", result);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
