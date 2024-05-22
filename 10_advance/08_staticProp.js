class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        return `Username is ${this.username}`
    }
    static createdId() {  // for the static keyword its say createdId is nat a function. static means you don't want to give access to a instend object 
        return `123`
    }
}

const chai = new user('Rahamt')
// console.log(chai.username); // Rahamt
// console.log(chai.logMe());  // Username is Rahamt 
// console.log(chai.createdId());  //  not access for the static 

class teacher  extends user {
    constructor(username, password) {
        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        super(username)  
        this.password = password
    }
}

const rahamat = new teacher('Rahamat', '123')
console.log(rahamat.logMe());
// console.log(rahamat.createdId()); 
console.log(rahamat.username);   // here inside the chlid we access the createdID because of static key
 