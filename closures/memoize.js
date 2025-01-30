// function memoize(fn){
//     let cache = {};
//     return function(...args){
//         if(cache[args]){
//             return cache[args];
//         }
//         let result = fn(...args);
//         cache[args] = result;
//         return result;
//     }
// }

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args; // Use array of arguments directly
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
// function memoize(fn) {
//     const cache = {}; // Private cache object
//     return function(...args) {
//         const key = JSON.stringify(args); // Create a key from arguments
//         if (cache[key]) {
//             return cache[key]; // Return cached result
//         }
//         const result = fn(...args);
//         cache[key] = result; // Store result in cache
//         return result;
//     };
// }


const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(12)); 