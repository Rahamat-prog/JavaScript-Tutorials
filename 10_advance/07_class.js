// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes
// A class element can be characterized by three aspects:

// Kind: Getter, setter, method, or field
// Location: Static or instance
// Visibility: Public or private

// The constructor method is a special method for creating and initializing an object created with a class

// Declaration
class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encriptedPassword() {
        return `The password is ${this.password}abc`
    }
    changeUserName() {
        return `the name is changed in capital ${this.username.toUpperCase()}`
    }

}
const chai = new user('rahamat', 'rahamat123@gmail.com', '1223' )
console.log(chai.username); // rahamat
console.log(chai.encriptedPassword()) // The password is 1223abc
console.log(chai.changeUserName()); // the name is changed in capital RAHAMAT
console.log(chai instanceof user);  // true 


// behind the scenc
function user(username,email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encriptedPassword = function() {
    return `Encrpted password is ${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chaiMasala = new user('rahamat', 'rahamat@gmail.com', '123')
console.log(chaiMasala.encriptedPassword());
console.log(chaiMasala.changeUsername());


// *** when we use constructor function arrow function is not applicable 