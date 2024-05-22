// Math.PI is a property of the Math object that represents the mathematical constant π (pi), which is approximately equal to 3.141592653589793.

console.log(Math.PI);   // 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI); // error we can't change the value

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI') 
console.log(descripter); // value: 3.141592653589793,
// writable: false,
// enumerable: false,
// configurable: false

// const myObj = Object.create(null) // way of  create object

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'price'));

(Object.defineProperty(chai,'price', {
    writable: true,    
    value : 300,
    enumerable: false 
}))

console.log(chai.price); // here change price because of writable set true.
console.log(Object.getOwnPropertyDescriptor(chai, 'price'));

for (let [key, value] of Object.entries(chai)) {  // useing of entries itrate the object 
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`); // ->   //name : ginger chai
                                                // isAvailable : true
                                               // price not print cause of enumerable: false set

    }
}


//  Writable: This indicates whether the value of the property can be changed. If a property is writable (true), its value can be modified

// Enumerable: This specifies whether the property will be included when iterating over the object's properties using a loop (e.g., for...in loop or Object.keys()). If a property is enumerable (true)

// Configurable: This determines whether the property descriptor itself can be modified and whether the property can be deleted from the object. If a property is configurable (true), its descriptor can be changed, and it can be deleted from the object

   