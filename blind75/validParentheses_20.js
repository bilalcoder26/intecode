/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
*/

function validParentheses(s) {
  let stack = [];
  let bracketObj = { ")": "(", "}": "{", "]": "[" };
  for (const ch of s) {
    if (bracketObj[ch]) {
      const top = stack.pop();
      console.log("top", top)

      if (top !== bracketObj[ch]) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}
console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]"));
console.log(validParentheses("([])"));
console.log(validParentheses("([)]"));
