// i/p : abcddcdbcd
 
// o/p : abbcccdddd
 function sortedString(str){
     if(!str) return;
     let freqMap = {};
     for(let char of str){
         freqMap[char] = (freqMap[char] || 0 ) + 1
     }
     console.log("freqMap", freqMap);
     const sortedChars = Object.keys(freqMap).sort();
     console.log("sortedChars",sortedChars);
     
     let result = "";
     for (let char of sortedChars) {
         result += char.repeat(freqMap[char]); // Repeat each character based on its frequency
     }
 
     return result;
 }
 
 console.log(sortedString('abcddcdbcd'))