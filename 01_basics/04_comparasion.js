/*
📘 JavaScript Comparisons and Equality

This file shows how JavaScript handles comparison operators and equality checks,
including edge cases with `null`, `undefined`, and strict equality.
*/

// ✅ Basic comparisons (number vs number)
console.log("2 > 1:", 2 > 1);         // true
console.log("2 >= 1:", 2 >= 1);       // true
console.log("2 < 1:", 2 < 1);         // false
console.log("2 == 1:", 2 == 1);       // false
console.log("2 != 1:", 2 != 1);       // true

// ✅ Comparisons with strings (type coercion)
console.log('"2" > 1:', "2" > 1);     // true → "2" is converted to number
console.log('"02" > 1:', "02" > 1);   // true → "02" is converted to 2

// ❗ Comparisons with null
console.log("null > 0:", null > 0);         // false
console.log("null == 0:", null == 0);       // false
console.log("null >= 0:", null >= 0);       // true

/*
Explanation:
- `null > 0` → false (null becomes 0, but comparison fails)
- `null == 0` → false (== doesn't convert null to number)
- `null >= 0` → true (null becomes 0, so 0 >= 0 is true)
→ This behavior is confusing and one reason to avoid loose equality (==)
*/

// ❗ Comparisons with undefined
console.log("undefined == 0:", undefined == 0);   // false
console.log("undefined > 0:", undefined > 0);     // false
console.log("undefined < 0:", undefined < 0);     // false

/*
Explanation:
- undefined is not converted to number in a meaningful way for comparisons
- So all comparisons with undefined and numbers return false
*/

// ✅ Strict Equality (===)
console.log('"2" === 2:', "2" === 2);  // false → different types (string vs number)

/*
==  → checks value with type coercion
=== → checks value AND type (strict equality)
*/

