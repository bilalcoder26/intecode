function validParenthesis(s){
    let stack =[];
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    for(let c of s){
        if(map[c]){
            stack.push(map[c])
        }else if(stack.pop() !== c){
            return false
        }
    }
    return stack.length === 0;

}

console.log(validParenthesis('()[]{}'))
console.log(validParenthesis('()'))
console.log(validParenthesis('(]'))
console.log(validParenthesis('([])'))