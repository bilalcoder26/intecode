// amatya technologies

// find unpaired bracket with count
let bracket="(())()()()((" 
//this appraoch i followed in interview which is not good VERY BAD
function pariBracket(str){
    if(!str || str.length === 1) return str
    const freqMap ={};
    for(let char of str){
        freqMap[char] = (freqMap[char] || 0) + 1;

    }
    const maxKey = Object.keys(freqMap).reduce((a, b) => freqMap[a] > freqMap[b] ? a : b);
    return maxKey
    // console.log(freqMap)
}

// console.log(pariBracket(bracket))

function findUnpairedBrackets(str) {
    if (!str) return { error: "Invalid input" }; // Handle empty input

    let openCount = 0, closeCount = 0;

    for (let char of str) {
        if (char === '(') {
            openCount++; // Count opening brackets
        } else if (char === ')') {
            if (openCount > 0) {
                openCount--; // Pair with an open bracket
            } else {
                closeCount++; // Unmatched closing bracket
            }
        }
    }

    return {
        '(': openCount, // Remaining open brackets
        ')': closeCount // Remaining closed brackets
    };
}

// Test Cases
console.log(findUnpairedBrackets("(())()()()((")); // { '(': 2, ')': 0 }
console.log(findUnpairedBrackets("(()))(()"));     // { '(': 1, ')': 1 }
console.log(findUnpairedBrackets("(((())))"));     // { '(': 0, ')': 0 }
console.log(findUnpairedBrackets(""));            // { error: 'Invalid input' }
console.log(findUnpairedBrackets(")()("));        // { '(': 1, ')': 1 }




