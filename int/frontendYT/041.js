const obj ={};
Object.defineProperty(obj, 'a', {
    value:"char", enumerable:true
});
console.log(obj.a); //'char'
console.log(Object.keys(obj));//['a]