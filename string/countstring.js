function countString(str){
    if(!str || str.length === 0) return;
    let freqMap = {};
    for(let i=0;i<str.length;i++){
        if(freqMap[str[i]]){
            freqMap[str[i]]++;
        }else{
            freqMap[str[i]] = 1;
        }
    }
    return freqMap;

}
console.log(countString('aabcccccaaaa')); // { a: 6, b: 1, c: 5 }

function countString2(str){
    if(!str || str.length === 0) return;
    let freqMap = {};
    for(let char of str){
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    return freqMap;

}
console.log('2way', countString2('aabcccccaaaa'));