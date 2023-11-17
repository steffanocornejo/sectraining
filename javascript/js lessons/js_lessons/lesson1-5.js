// strings
const myVariable = "Mathematic";

console.log(myVariable.charAt(5));
console.log(myVariable.slice(5, 8));


console.log(myVariable.split("e"));

console.log("John,Joe,Dave".split(","));

// numbers

const myNumber = 42;
const myFloat = 42.01;
const myString = "42";
const myString2 = "42.123abc";

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber == myString);

console.log(Number(myString) === myNumber);
console.log(Number("Dave"));
console.log(Number(true));
console.log(Number.isInteger(myString));

console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString2));
console.log(Number.parseFloat(myString2).toFixed(2));
console.log(Number.parseInt(myString2));

console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString2));

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

console.log(isNaN("Dave"));


// math

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.5));


console.log(Math.pow(2, 10));
console.log(Math.pow(5, 2));

console.log(Math.min(2, 0.5, 9));
console.log(Math.max(2, 0.5, 9));

// from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);