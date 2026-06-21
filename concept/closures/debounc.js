function dbounce(fn,delay){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}