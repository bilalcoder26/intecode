//https://leetcode.com/problems/count-the-number-of-consistent-strings/description/?envType=problem-list-v2&envId=string

/*
Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 */

function countConsistentString(allowed,words){
    const set = new Set();
    let count =0;
    for(const ch of allowed){
        set.add(ch);
    }
    for(const word of words){
        let isValid = true;
        for(const char of word){
            if(!set.has(char)){
                isValid = false;
                break;
            }
        }
            if(isValid) count++;

    }
    return count;
}

function countConsistentStringOptimized(allowed, words) {

    // 26 lowercase letters
    const allowedArr = new Array(26).fill(false);

    // mark allowed characters
    for (const ch of allowed) {
        allowedArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
    }

    let count = 0;

    for (const word of words) {

        let isValid = true;

        for (const ch of word) {

            if (!allowedArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]) {
                isValid = false;
                break;
            }
        }

        if (isValid) count++;
    }

    return count;
}

console.log(
    countConsistentStringOptimized(
        "ab",
        ["ad","bd","aaab","baa","badab"]
    )
);
console.log("countConsistentString", countConsistentString("ab",["ad","bd","aaab","baa","badab"]))