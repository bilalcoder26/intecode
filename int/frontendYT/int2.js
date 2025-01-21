Promise.resolve()
   .then(() => 2)  
   .catch(() => 2)
   .then((a) => console.log(a))
   .then((b) => console.log(b))
   .then(() => {
     throw new Error();
   })
   .catch(() => 1)
   .then((c) => console.log(c)); 

   /*
   2
undefined
1

   */