// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
function romanToInt(str) {
    if(!str) return;
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result =0;
  for(let i=0;i<str.length;i++){
    let curr = map[str[i]];
    let next = map[str[i+1]];
    if(curr<next){
        result += next - curr;
        i++

    }else{
        result += curr

    }
  }
  return result
}

console.log(romanToInt('IV'))
console.log(romanToInt('VI'))
console.log(romanToInt('III'))
console.log(romanToInt('XI'))
console.log(romanToInt('IX'))