console.log(+true);//1
console.log(!"javascript")//false

/*
The unary + operator in JavaScript attempts to convert its operand into a number.

true is a Boolean value. When converted to a number:
true becomes 1.
false becomes 0.
So, +true evaluates to 1.
*/

/*
console.log(!"javascript"); // false
Explanation:
The logical NOT operator (!) negates a truthy or falsy value.
In JavaScript, a non-empty string (like "javascript") is considered truthy.
The ! operator inverts the truthiness:
truthy → false.
falsy → true.
"javascript" is a non-empty string, so it is truthy. Applying ! to it results in false.
*/