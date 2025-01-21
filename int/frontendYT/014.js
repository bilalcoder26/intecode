//question based on tagged timplate literals

function getSummary(one,two, three){
    console.log(one);
    console.log(two);
    console.log(three);

}

const fname ="vasuki";
const age = 8768;

getSummary`${fname} age is ${age}`;

/*
output
console.log(one);    // Logs: ["", " age is ", ""]
console.log(two);    // Logs: "vasuki"
console.log(three);  // Logs: 8768

*/

/*
getSummary`${fname} age is ${age}`;

The backticks () denote a **template literal**,
 which allows interpolation of variables using ${}` syntax.
Here:
${fname} inserts the value of fname, which is "vasuki".
${age} inserts the value of age, which is 8768.

*/

/*

Tagged Template Literals
When you use a function (in this case, getSummary) immediately before a template literal,
 it is called a tagged template literal. The function processes the template literal in a special way.

How Tagged Template Literals Work
When a tagged template literal is used, the function (getSummary) is called with:

An array of strings (the raw literal parts).
The interpolated values (the values inside ${}) as additional arguments.

The template literal `${fname} age is ${age}` is broken into:
String parts: ["", " age is ", ""] (the literal text split at the interpolation points).
Values: [fname, age] (the interpolated values).

How the Function Is Called

getSummary(["", " age is ", ""], "vasuki", 8768);

*/

/*
The Function Definition

function getSummary(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

one: The first parameter receives the array of string parts: ["", " age is ", ""].
two: The second parameter receives the first interpolated value: "vasuki".
three: The third parameter receives the second interpolated value: 8768.

*/

/*
Example Use Case
function sanitize(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? String(values[i]).replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
        return result + str + value;
    }, "");
}

const name = "<script>alert('hack');</script>";
const sanitized = sanitize`Hello, ${name}!`;

console.log(sanitized); // Output: "Hello, &lt;script&gt;alert('hack');&lt;/script&gt;!"

*/