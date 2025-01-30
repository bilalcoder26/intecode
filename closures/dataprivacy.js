function counter(){
    let count =0;
    return {
        increment: function(){
            return count++;
        },
        decerment: function(){
            return count--;
        },
        getCount: function(){
            return count;
        }
    }
}
let counter1 = counter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.getCount());
console.log(counter1.decerment());
console.log(counter1.decerment());
console.log(counter1.getCount());
