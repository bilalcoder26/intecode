// function printStringWithDelay(str){
//     return new Promise((resolve) => {
//         let i=0;
//         function printChar(){
//             if(i <  str.length){
//                 // console.log(str[i])
//                 i++
//                 setTimeout(printChar, 1000)
//             }else{
//                 resolve()
//             }

//         }
//         printChar()
//     })
// }

// console.log(printStringWithDelay('Bilal'))

function printStringWithDelay(str) {
    return new Promise((resolve) => {
      let i = 0;
  
      function printChar() {
        if (i < str.length) {
          console.log(str[i]);
          i++;
          setTimeout(printChar, 1000);
        } else {
          resolve(); // Resolve the promise when all characters are printed
        }
      }
  
      printChar();
    });
  }

  console.log(printStringWithDelay('Bilal'))
  
//   async function printDelayedString(str) { // needed to use await keyword
//       await printStringWithDelay(str)
//       console.log("String printed with delay using Promise")
//   }
  
//   printDelayedString("bilal");