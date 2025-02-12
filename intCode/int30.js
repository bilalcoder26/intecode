// 1-'1'// error
// false ==-0 // true
// 1<2<3 <1 1<2<false ---> 1<2<0 ---> 1< fasle ---> 1< 0 //false
// 1>2>3>1 --->  1>2> true --/. 1> true --->  1>1 // fasle

// var obj= {
//     a:{
//         b:{
//             c: [10, 20]
//         }
//     }
// }
console.log(1-'1') // 0 
/*
Type Coercion: The - (subtraction) operator in JavaScript triggers numeric conversion when 
one of the operands is a string.
String to Number Conversion: The string '1' is automatically converted to a number 1 before 
performing the subtraction.

*/

console.log(false ==-0 )
/*
The == (loose equality) operator in JavaScript performs type coercion when the operands are of different types.

Step-by-step explanation:
Boolean to Number Conversion:

false is converted to a number before comparison.
In JavaScript, false is numerically equal to 0.
*/



console.log( 1<2<3<1) //false

console.log(1>2>3>1) // false

var obj= {
    a:{
        b:{
            c: [10, 20]
        }
    }
}

const { c } = obj.a.b; // Extracts c array
const [first, second] = c; // Destructures first two elements

console.log(first); // 10
console.log(second); // 20
