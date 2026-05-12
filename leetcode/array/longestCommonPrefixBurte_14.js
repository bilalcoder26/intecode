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
    const first = strs[0];
    const prefixChars =[];
    for(let i=0;i< first.length;i++){
        const ch = first[i]
        for(let sIndex=1;sIndex< strs.length;sIndex++){
            const s = strs[sIndex];
            if(i >= s.length || s[i] !== ch){
                return prefixChars.join("")
            }
        }
        prefixChars.push(ch);
    }
    return prefixChars.join("")

}
console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]));