const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three);
/*
one → {} (empty object)
two → '' (empty string)
three → [] (empty array)
*/

/*
Understanding the || Operator (Logical OR):
The || operator evaluates its operands from left to right.
It returns the first truthy value it encounters or the last value if all are falsy.
Truthy values: Any value that is not false, 0, '' (empty string), null, undefined, 
or NaN is considered truthy.
*/

/*
const one = false || {} || null;
Evaluate from left to right:
false → Falsy, so move to the next operand.
{} (an empty object) → Truthy, so the evaluation stops here.
The value of one is {}.
*/

/*
 const two = null || false || '';
Evaluate from left to right:
null → Falsy, so move to the next operand.
false → Falsy, so move to the next operand.
'' (empty string) → Falsy, so return the last operand.
The value of two is ''.
*/

/*
 const three = [] || 0 || true;
Evaluate from left to right:
[] (an empty array) → Truthy, so the evaluation stops here.
The value of three is [].
*/

/*
The || operator short-circuits and stops evaluating once it encounters a truthy value.
Objects ({}) and arrays ([]) are always truthy, even if they are empty.
The || operator returns the last operand if all operands are falsy.
*/
