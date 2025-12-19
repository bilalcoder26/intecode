//this way i attempeted in interview very bad

// function printStringWithDelay(str, delay){

//     for(let i=0;i<str.length;i++){
//         setTimeout(() => {
//             console.log(str[i])
//         }, delay)
//     }

// }
// console.log(printStringWithDelay("Bilal", 2000))


// function printStringWithDelay(str) {
//     let i = 0;

//     function printChar() {
//         if (i < str.length) {
//             console.log(str[i]);
//             i++;
//             setTimeout(printChar, 1000); // Call the function again after 1 second
//         }
//     }

//     printChar();
// }

// printStringWithDelay("bilal")

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
  
  // async function printDelayedString(str) { // needed to use await keyword
  //     await printStringWithDelay(str)
  //     console.log("String printed with delay using Promise")
  // }
  
  // printDelayedString("bilal");