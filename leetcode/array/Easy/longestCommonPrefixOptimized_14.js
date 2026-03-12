/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

function longestCommonPrefix(strs){
    if(!strs || strs.length === 0) return "";
    if(strs.length === 1) return strs[0];
    const minLen = Math.min(...strs.map(s => s.length));
    for(let i =0;i< minLen;i++){
        const ch = strs[0][i]
        for(let j=1;j<strs.length;j++){
            if(strs[j][i]!== ch){
                return strs[0].slice(0,i);
            }
        }
    }
    return strs[0].slice(0, minLen);

}
console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]));