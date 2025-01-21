console.log(1);
setTimeout(()=>{console.log(2)});
new Promise(res=>res()).then(()=>{
  console.log(3);
});
console.log(4);
/*
1
4
3
2
*/