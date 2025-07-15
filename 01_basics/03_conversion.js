/*
📘 JavaScript Type Conversion and Operations

This file demonstrates how JavaScript handles:
1. Type conversion (String ↔ Number ↔ Boolean)
2. Common operations and operator behaviors
*/

// -------------------- Type Conversion --------------------

// Convert string to number
let score = "Ajit";
let valueInNumber = Number(score);
console.log("Converted score:", valueInNumber);           // NaN
console.log("Type:", typeof valueInNumber);               // number

// Notes:
// "33"      → 33
// "33abc"   → NaN
// true      → 1
// false     → 0

// Convert string to boolean
let isLoggedIn = "Ajit";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("Boolean value:", booleanIsLoggedIn);         // true

// Notes:
// 1         → true
// 0         → false
// ""        → false (empty string)
// "text"    → true (any non-empty string)

// Convert number to string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log("String value:", stringNumber);               // "33"
console.log("Type:", typeof stringNumber);                // string

// -------------------- Operations --------------------

let value = 3;
let negValue = -value;
console.log("Negative of value:", negValue);              // -3

// Arithmetic operators
console.log("2 + 2 =", 2 + 2);
console.log("2 - 2 =", 2 - 2);
console.log("2 * 2 =", 2 * 2);
console.log("2 ** 3 =", 2 ** 3);     // Exponentiation
console.log("2 / 3 =", 2 / 3);
console.log("2 % 3 =", 2 % 3);

// String concatenation
let str1 = "hello";
let str2 = " Ajit";
let str3 = str1 + str2;
console.log("Concatenated string:", str3);                // "hello Ajit"

// Type coercion in expressions
console.log('"1" + 2 =', "1" + 2);        // "12"
console.log('1 + "2" =', 1 + "2");        // "12"
console.log('"1" + 2 + 2 =', "1" + 2 + 2); // "122"
console.log('1 + 2 + "2" =', 1 + 2 + "2"); // "32"

// Operator precedence
console.log('(3 + 4) * 5 % 3 =', (3 + 4) * 5 % 3);         // 2

// Unary + operator
console.log('+true =', +true);         // 1
console.log('+"", empty string =', +""); // 0

// Multiple assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;            // All = 4
console.log("Multiple assignment:", num1, num2, num3);

// Increment
let gameCounter = 100;
++gameCounter;
console.log("Incremented counter:", gameCounter);         // 101

// 🔗 Link to spec (Type Conversion Abstract Operation)
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
