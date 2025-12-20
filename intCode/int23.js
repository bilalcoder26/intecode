// amatya technologies
//finf vowel and return with index 
function findVowel(str){
    if(!str) return
    let result = [];
    let vowelArray = ['a','e','i','o','u'];
    str.split('').forEach((item, index) => {
        if(vowelArray.includes(item.toLowerCase())){
            result.push({index, vowel:item})
        }

    })
    return result

}
console.log(findVowel('Bilal'))

function findVowelOptimized(str){
    if(!str || typeof str !== 'string') return [];
    const vowel = new Set(['a','e','i','o','u']);
    let result =[];
    for(let i=0;i<str.length;i++){
        const char = str[i];
        if(vowel.has(char.toLocaleLowerCase())){
            result.push({index:i, vowel:char});
        }

    }
    return result;

}
console.log(findVowelOptimized("Bilal"));