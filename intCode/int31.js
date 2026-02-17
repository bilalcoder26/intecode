//input:aabccc
//output: {a:2,b:1, c:3}

function charFrequency(str){
    const map = new Map();
    for(const ch of str){
        map.set(ch, ((map.get(ch) ?? 0 ) +1))
    }
    return map;

}
console.log(charFrequency("aabccc"))