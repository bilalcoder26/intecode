//global logic
// input --> aabcccccaaaa 
// output --> a2b1c5a4

function compressString(str) {
    let compressed = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed.length < str.length ? compressed : str;
}
console.log(compressString('aabcccccaaaa')); // a2b1c5a4