// -----------
// Variables
// -----------
let firstName = "Alice"; // string
const age = 25; // number (constant)
let isStudent = true; // boolean
let emptyValue = null; // null
let notDefined; // undefined

console.log(firstName, age, isStudent);

// -----------
// Standard Operations
// -----------
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulo:", a % b);

// Comparison
console.log(a > b);
console.log(a === b);
console.log(a !== b);

// Logical
console.log(true && false);
console.log(true || false);
console.log(!true);

// -----------
// Arrays
// -----------
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);
fruits.push("orange");

// Loop through array (for loop)
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// Loop with for...of
for (let fruit of fruits) {
  console.log("For...of:", fruit);
}

// Array methods
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

// -----------
// Objects (Literal Objects)
// -----------
let person = {
  name: "Bob",
  age: 30,
  isStudent: false,
};

console.log(person.name);

// Add property
person.city = "Berlin";

// Loop through object (for...in)
for (let key in person) {
  console.log(key + ":", person[key]);
}

// Object methods
Object.keys(person).forEach((key) => {
  console.log("Key:", key);
});

Object.values(person).forEach((value) => {
  console.log("Value:", value);
});

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

// -----------
// Functions
// -----------
function greet(userName) {
  return "Hello " + userName;
}

console.log(greet("Alice"));

// Arrow function
const add = (x, y) => x + y;
console.log(add(5, 7));

// -----------
// Conditionals
// -----------
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Ternary operator
let result = score >= 50 ? "Passed" : "Failed";
console.log(result);
