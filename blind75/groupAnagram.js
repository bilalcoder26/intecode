/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]


*/

function groupAnagram(strArr) {
  const map = new Map();
  for (const word of strArr) {
    const key = word.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return Array.from(map.values());
}
// console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagram([""]));
// console.log(groupAnagram(["a"]));


function fasterGroupAnagram(str){
    const map = new Map();
    for(let word of str){
        const count = new Array(26).fill(0);
        for(let ch of word){
            count[ch.charCodeAt(ch) -97]++
        }
        // console.log(count)
        const key = count.join("#");
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(word);
    }
    return [...map.values()]
}

console.log(fasterGroupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(fasterGroupAnagram([""]))
console.log(fasterGroupAnagram(["a"]))