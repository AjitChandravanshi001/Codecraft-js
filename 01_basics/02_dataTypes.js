
// ----------- Primitive Data Types -----------

let myNumber = 42;
let myString = "JavaScript is fun!";
let myBoolean = true;
let myUndefined;
let myNull = null;
let myBigInt = 1234567890123456789012345678901234567890n;
let mySymbol = Symbol("id");

// ----------- Reference (Non-Primitive) Data Types -----------

let myObject = {
    name: "Ajit",
    age: 21
};

let myArray = [1, 2, 3, 4, 5];

function myFunction() {
    return "Hello from function!";
}

let myDate = new Date();

// ----------- Type Checking -----------

console.log("myNumber:", typeof myNumber);        // number
console.log("myString:", typeof myString);        // string
console.log("myBoolean:", typeof myBoolean);      // boolean
console.log("myUndefined:", typeof myUndefined);  // undefined
console.log("myNull:", typeof myNull);            // object (quirk in JS)
console.log("myBigInt:", typeof myBigInt);        // bigint
console.log("mySymbol:", typeof mySymbol);        // symbol

console.log("myObject:", typeof myObject);        // object
console.log("myArray:", typeof myArray);          // object (arrays are objects)
console.log("myFunction:", typeof myFunction);    // function
console.log("myDate:", typeof myDate);            // object


/* 
  📘 JavaScript Data Types: Definition and Classification

  ➤ What is a Data Type?
  In JavaScript, a data type represents the kind of data a variable can hold. 
  It tells the interpreter what operations can be performed on the data.
  
  JavaScript is a **dynamically typed** language, meaning variables are not bound to
   any one data type—they can hold any type of data.

  -------------------------------------------
  ✅ JavaScript Data Types are divided into:
  -------------------------------------------

  1️⃣ Primitive Data Types (Immutable):
     These hold single, simple values and are compared by value.

     - Number     → Numeric values like 1, 3.14, -7
     - String     → Text like "Hello", 'JS'
     - Boolean    → true or false
     - Undefined  → A variable declared but not assigned
     - Null       → Represents an empty or unknown value
     - BigInt     → Used for very large integers (e.g. 9007199254740991n)
     - Symbol     → Unique and immutable identifier (often used as keys)

  2️⃣ Non-Primitive (Reference) Data Types:
     These can hold multiple values and are compared by reference.

     - Object     → Key-value pairs { name: "Ajit", age: 21 }
     - Array      → Ordered list of values [1, 2, 3]
     - Function   → Block of reusable code
     - Date       → Date and time object
     - RegExp     → Regular expressions (patterns for matching text)

  -------------------------------------------
  ℹ️ typeof operator:
  -------------------------------------------
  JavaScript provides the `typeof` operator to check the type of a variable.

  Examples:
    typeof "Hello"     → "string"
    typeof 10          → "number"
    typeof true        → "boolean"
    typeof null        → "object" (this is a known quirk in JavaScript)
    typeof undefined   → "undefined"
    typeof {}          → "object"
    typeof []          → "object"
    typeof function(){}→ "function"

  🔍 Note: Arrays and null both return "object" with typeof,
           but you can distinguish them using:
           - Array.isArray(arr)
           - val === null

*/
