const box = {x:10, y:20};
Object.freeze(box);
const shape = box;
shape.x =100;
shape.z =20;
console.log(shape); //{x:10, y:20}