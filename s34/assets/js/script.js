let fruits = ["manzana", "mandarina", "sandia", "melon"];
console.log(fruits)


console.log("push");
fruits.push("mango"); 

console.log(fruits);

console.log("pop");
fruits.pop(); 

console.log(fruits);

console.log("unshift");
fruits.unshift("uva");

console.log(fruits);

console.log("shift");

let delateditem = fruits.shift();

console.log("elemento eliminado con shift");

console.log("includes");
// Retorna un booleano
console.log(fruits.includes ("melon")); // true
console.log(fruits.includes ("mandarina")); // false
console.log("IndexOf");

console.log(fruits.indexOf("melon")); // 1
console.log(fruits.indexOf("mandarina")); // -1

console.log("join");

console.log(fruits.join());

console.log(fruits.join(","));
console.log(fruits.join("/"));
console.log(fruits.join("_"));
console.log(fruits.join("-"));

console.log("slice");

console.log(fruits.slice(2));
console.log(fruits.slice(2, 4));

console.log("splice");
fruits.splice(2, 2, "uva", "manzana", "melon");
console.log(fruits);

console.log("=============");
let nums = [1, 2, 3, 4, 5, 6, 7, 9, 10];
console.log(nums);

console.log("map");

let numsMap = nums.map((x) => x + 3);
console.log(numsMap);

console.log(nums.map((x) => x * 10));

console.log(nums.map((x) => `Número ${x}`));

console.log("filter");

let filteredNums = nums.filter((x) => x > 5);
console.log(filteredNums); 

console.log(nums.filter((x) => x < 6));

console.log(nums.filter((x) => x % 2 === 0));

console.log("reduce");

console.log(nums.reduce((a, b) => a + b, 0));

console.log(nums.reduce((a, b) => a * b, 1));

