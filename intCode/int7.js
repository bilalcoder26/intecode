function largestConsecutiveSubstring(str){
    if(!str) return ;
    let maxLength = 0;
    let maxSubstring = '';
    let start = 0;
    let seenChars = new Set();
    for(let end=0;end<str.length;end++){
        const currentChar = str[end];
        while(seenChars.has(currentChar)){
            seenChars.delete(str[start])
            start++;
        }
        seenChars.add(currentChar);
    
    const currentLength = end - start + 1;
    if(currentLength > maxLength){
        maxLength = currentLength;
        maxSubstring = str.slice(start, end+1);
    }
}
return {
    maxLength,
    maxSubstring,
};

}

const str = "aabbccdabcadd";
const result = largestConsecutiveSubstring(str);
console.log(`Longest substring without repeating characters: "${result.maxSubstring}"`);
console.log(`Length of the longest substring: ${result.maxLength}`);