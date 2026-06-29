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

function debounces(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this,args)
        }, delay)
    }
}