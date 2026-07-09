function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(1)(2)(3));

//reusability

const multiply = (a) => (b) => a*b;

const double = multiply(2);
const triple = multiply(3);

console.log(double(5))
console.log(triple(15))