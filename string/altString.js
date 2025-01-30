function altString(word1, word2){
    let result =[];
    let i = 0;
    let j = 0;
    while(i < word1.length || j < word2.length){
        if (i < word1.length){
            result.push(word1[i]);
            i++;
        }
        if(j < word2.length){
            result.push(word2[j]);
            j++;
        }

    }
    return result.join('');

}

console.log(altString('abc', 'def')); // adbecf