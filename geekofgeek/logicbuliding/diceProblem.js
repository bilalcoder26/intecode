/*
You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. 
The numbers are in the range of 1 to 6, like any ordinary dice. 
You will be provided with a face of this cube, your task is to guess the number on 
the opposite face of the cube.

Examples:

Input: n = 2
Output: 5
Explanation: For dice facing number 5 opposite face will have the number 2.


Input: 6 = 6
Output: 1

In a normal 6-faced dice, 1 is opposite to 6, 2 is opposite to 5, and 3 is opposite to 4. 
Hence a normal if-else-if block can be placed 
*/

function oppositFaceOfDice(num){
    let map = {
        6:1,
        5:2,
        3:4
    }
    return map[num]

}

console.log(oppositFaceOfDice(6))
console.log(oppositFaceOfDice(1))

// this is the very bad way of doing this thing because it wrok for only one time one case

/*
A six-sided die follows a simple rule:

Opposite Face
=
7
−
Given Face
Opposite Face=7−Given Face
This works because each pair of opposite numbers sums to 7:

1 + 6 = 7
2 + 5 = 7
3 + 4 = 7
*/

function diceProblem(num){
    if(num <1 || num > 7) return 
    return 7-num;
}
console.log('diceProblem(5)', diceProblem(5))
console.log('diceProblem(6)', diceProblem(6))

function diceProblem2(num) {
  if (!Number.isInteger(num)) throw new TypeError("num must be an integer");
  if (num < 1 || num > 6) throw new RangeError("num must be between 1 and 6");
  return 7 - num;
}

console.log('diceProblem2(5)', diceProblem2(5))
console.log('diceProblem2(6)', diceProblem2(6))