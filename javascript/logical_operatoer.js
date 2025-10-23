// logical Operators
// =================
// and ==> &&
// or  ==> ||

true && true //==> true
true && false //==> false
false && true //==> false
false && false //==> false

// true || true ==> true
// true || false ==> true
// false || true ==> true
// false || false ==> false

console.log(5>6 || 7<8); //true
console.log(5<6 || 7>8); //true
console.log(5>6 || 7>8); //false

console.log(5>6 && 7>8); //false
console.log(5<6 && 7>8); //false
console.log(5<6 && 7<8); //true
console.log(1 && 4); 4
console.log(0 && 4); 0
console.log(0 || 4); 4
console.log(4 || 0); 4
a = 0 || 4
console.log(a); //==> 4
//======================================


// ? → Ternary (Conditional) Operator

// The ? : operator is used for conditional expressions.

// Syntax:

// condition ? valueIfTrue : valueIfFalse


Example:

let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"


// Checks age >= 18

// If true → "Adult"

// If false → "Minor"

// Nullish ??
// ===========
// It will identify defined value not undefined values(null,undefined)

var a = null;
var b = a ?? 10
console.log(b); //==> 10

var a = 5;
var b = a ?? 10
console.log(b); //==> 5
