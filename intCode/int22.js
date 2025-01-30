//amantey technologies
 
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

Promise.resolve().then(() => {

  console.log('D');

  setTimeout(() => console.log('E'), 0);

});

console.log('F');

// AFCDBE