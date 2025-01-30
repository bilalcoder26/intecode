function validParenthesis(s){

    let stack =[];
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }else{
            let preVal = stack.pop();
            if(preVal === '(' && char !== ')') return false
            if(preVal === '{' && char !== '}') return false
            if(preVal === '[' && char !== ']') return false
            if(preVal === undefined) return false

        }
    }
    return stack.length === 0

}

console.log(validParenthesis('()[]{}'))
console.log(validParenthesis('()'))
console.log(validParenthesis('(]'))
console.log(validParenthesis('([])'))   