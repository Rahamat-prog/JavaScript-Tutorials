// Object Constructor: You can also create objects using a constructor function
function setUserName(userName) {
    // complex DB call
    this.userName = userName
    console.log("called"); 
    console.log(userName);
}


function createUser(userName, email, password) {
    setUserName.call(this , userName) // Calls setUserName with `this` referring to the new object being created
    this.email = email
    this.password = password
}

const chai = new createUser('Rahamat', 'example123@.com', '123')
console.log(chai);
console.log(chai.userName);

