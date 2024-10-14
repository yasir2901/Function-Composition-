
let odd = num => num % 2 !== 0;
let double = num => num * 2;


let array = arr => arr.filter(odd).map(double);

let numbers = [1,2,3, 4, 5, 6];
console.log(array(numbers));  
