/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/

function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    const counts = new Map();
    for(const x of str1){
        counts.set(x, (counts.get(x) || 0) +1)
    }
    // console.log("map", counts.get('h'))
    for(const x of str2){
        if(counts.has(x)){
            const next = counts.get(x)-1;
            if(next ===0){
                counts.delete(x);
            }else{
                counts.set(x,next);
            }

        }
    }
    return counts.size === 0

}
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))