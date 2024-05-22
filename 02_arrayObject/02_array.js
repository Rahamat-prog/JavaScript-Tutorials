const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

const allHeros = marvelHeros.concat(dcHeros) // add two array
// console.log(allHeros); 

const allNewHeros = [...marvelHeros, ...dcHeros] //anotehr way to add two array.
//console.log(allNewHeros);

const interstingArray = [1, 3, 2, 4, [9, 7, 6, [3, 4, 6]]]
const flatArray = interstingArray.flat(Infinity) // flat in one array
//console.log(flatArray);

// check array or not 

// console.log(Array.isArray("Rahamat")); // false 
// console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ] |  static method creates a new, shallow-copied
// console.log(Array.from([1, 2, 3], (x) => x + x )); // 2, 4, 6

// convert variable to array 

const game1 = "PUBG"
const game2 = "Freefare"
const game3 = "Bike ride"

console.log(Array.of(game1, game2, game3)); // [ 'PUBG', 'Freefare', 'Bike ride' ]
