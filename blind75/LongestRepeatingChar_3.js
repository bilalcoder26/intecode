/*
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
*/

function longestRepeatingChar(s){
    let start =0;
    let maxLength =0;
    const seenChar = new Set();
    for(let end=0;end<s.length;end++){
        const currentChar = s[end];
        while(seenChar.has(currentChar)){
            seenChar.delete(s[start])
            start++;

        }
        seenChar.add(currentChar);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;

}
console.log(longestRepeatingChar("abcabcbb"))
console.log(longestRepeatingChar("bbbbbbb"))
console.log(longestRepeatingChar("pwwkew"))