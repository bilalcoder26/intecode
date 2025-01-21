const obj ={};
function transform(data){
    data.name ="JS";
    data = null;
    return data;
}

const newObj = transform(obj);
console.log({obj, newObj}) // {obj:{name: "JS"}, newObj:null}

/*
2. Function Call: transform(obj)
The obj reference is passed to the transform function as the data parameter.
Important Note: In JavaScript, when objects are passed as function arguments, 
their references are passed by value. This means:
The data variable inside the function points to the same object in memory as obj.
*/