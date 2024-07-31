// Understanding Data Types in JavaScript:
// Task 1:

let studentName = 'Name';
let studentAge = 'Age';
let studentGrade = 'Grade';
let isPresent = true;


// Task 2: Assign sample values

studentName = "Alice";
studentAge = 15;
studentGrade = 10;
isPresent = true;

// Task 3: Display the student information using console.log() statements.

console.log('Student Name:', studentName);
console.log(studentName, 'Age:', studentAge);
console.log(studentName, 'Grade:', studentGrade);
console.log('Is', studentName, 'Present?', isPresent)


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Exploring JavaScript Operators:

// Task 1: Declare variables to store two numeric values for performing arithmetic operations.

let num1 = 1;
let num2 = 1;


// Task 2: Assign sample numeric values to the variables declared in Task 1.

num1 = 5;
num2 = 3;


// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);


// Task 4: Explore assignment operators and update the values of variables.

num1 += 5;
num2 -= 2;

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);


// Task 5: Use comparison operators to compare the values of variables.

console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);


// Task 6: Apply logical operators to combine conditions and display the results.

let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
