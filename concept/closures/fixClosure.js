for(var i=0;i<=3;i++){
    setTimeout(() => {
    console.log(i)

    },1000)
}

for(var i=0;i<=3;i++){
   (function(j){
    setTimeout(() => {
        console.log('j-> fix with clousure', j)
    },1000)
   })(i)
}
