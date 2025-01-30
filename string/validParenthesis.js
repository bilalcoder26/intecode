function validParenthesis(s){
    let stack = [];
    for(let c of s){
        if(c==='(') stack.push(')')
            else if(c==='{') stack.push('}')
                else if(c==='[') stack.push(']')
                    else if(stack.pop() !== c) return false


    }
    return stack.length ===0;
    console.log(stack)
    
}

console.log(validParenthesis('()[]{}'))
console.log(validParenthesis('()'))
console.log(validParenthesis('(]'))
console.log(validParenthesis('([])'))