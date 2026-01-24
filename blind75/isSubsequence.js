/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/


function isSubsequence(s, t){
    let itr1 =0; 
    let itr2 =0;
    while(itr1 < s.length && itr2 < t.length){
        if(s[itr1] === t[itr2]){
            itr1++;
        }
        itr2++;
    }
    return itr1 === s.length;
}
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));