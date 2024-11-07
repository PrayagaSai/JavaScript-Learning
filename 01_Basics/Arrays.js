const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["batman", "superman", "flash"];

// console.log(marvel_heroes);
// console.log(dc_heroes);

// marvel_heroes.push(dc_heroes);
// const allheros = marvel_heroes.concat(dc_heroes);
// console.log(allheros);

// const all2 = [...marvel_heroes, ...dc_heroes];
// console.log(all2);

let arr1 = [1,2,[3,4],5,[6,[7,8]],9];
// console.log(arr1.flat(3));
// console.log(Array.isArray("Sai"));
// console.log(Array.from("Sai"));
// console.log(Array.from({name : "Sai"})); // provides an empty array brackets.

let score = 100;
let score2 = 300; 
let score3 = 500;

let arrays = Array.of(score, score2, score3);
// console.log(arrays);

let over_Array = [1,2,4,5,7];
// over_Array.unshift(3);
// over_Array.shift();
// console.log(over_Array);


const new_Arr = over_Array.join();
// console.log(new_Arr);

let myArr = [0,1,2,3,4];
console.log("A ", myArr);

let myn1 =  myArr.slice(1,3);
console.log(myn1);
console.log("B ", myArr);

let myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ", myArr);