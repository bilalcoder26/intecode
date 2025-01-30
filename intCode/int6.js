// Write a code for occurrence of largest consecutive characters coming in word without 
// repeating of a character for ex: 1. Str = aabbccdabcadd

function consecutiveChara(str){
    let maxSubstring =0
    let longestSubstring=""
    let start = 0;
    let seenChar = new Set();

    for(let end=0;end<str.length;end++){
        const currentChar = str[end];

        while(seenChar.has(currentChar)){
            seenChar.delete(str[start])
            start++
        }

        seenChar.add(currentChar)

        const max = end - start +1;
        if(max > maxSubstring){
            maxSubstring = max;
            longestSubstring = str.slice(start, end + 1);
        }

    }

    return{
        maxSubstring,
        longestSubstring
    }

}
const result = consecutiveChara('aabbccdabcadd')
console.log(result.longestSubstring)
console.log(result.maxSubstring)