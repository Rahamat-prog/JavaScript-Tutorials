//har ak real life entites ko object ke form mai represent kiya jata h aur iska common blueprint ko class ke form mai represent kiya jata h

class product {
    // properties -> variables -> data member 
    // name;
    // price;
    // rating;
    #rating; // its become private 
    constructor(n, p, r) {
        this.name = n
        this.price = p
        this.#rating = r
        // return 10 // primitive return is not allow in constructor 
        // return {x: 10, y: 20} // non primitive return is allow 
    }
// behaviour -> function ->  member function 
    display() {
        console.log(`display the current product`);
        console.log(this.name);
    }
}
const p = new product('iphone', 10000, 5); // new -> create an empty plain obj
// the above piece of code are called constructor method
console.log(p);
p.display()


// before class in javascript we use function as a constructor
// we can't not use arror function as function constructor 
function product2(n, p, r) {
    this.name = n
    this.price = p
    this.rating = r
}
const Planeobj = new product2('iphone', 10000, 5)
console.log("use function as blueprint ", Planeobj);


let obj = {
    x : 10,

    fun() {
      let y = {
        gun: () => {
            console.log(this.x);
        }
       }
       y.gun()
    }
        
}
obj.fun()


// static method is calling only by class not  access by the plain obj
// eg 
class product3 {

    static display() {
        console.log("Displayed");
    }
}
 const x = new product3()
 console.log(product3.display()); 
//  console.log(x.display()); // throw error 


//  add two complex number using set get
class complexNumber {
    #real
    #img

    constructor(r, i) {
        this.#real = r
        this.#img = i
    }
    display() {
        console.log(this.#real, " + i", this.#img);
    }
    get real() {
        return this.#real
    }
    get img() {
        return this.#img
    }
    addComplexNumber(c) {
        this.#real += c.real
        this.#img += c.img
    }
}
const c1 = new complexNumber(2, 3)
const c2 = new complexNumber(4, 6)
c1.display()
c1.addComplexNumber(c2)
c1.display()