function createMultipler(multipler){
    return function(number){
        return number * multipler;
    }
}

const double = createMultipler(2);
console.log(double(5)); // 10
const triple = createMultipler(3);
console.log(triple(5)); // 15