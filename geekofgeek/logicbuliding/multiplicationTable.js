// Program to print multiplication table of a number
// Given a number n, we need to print its table. 

/*
Input:  5
Output: 
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/

function multiplicationTable(num,times){
    if(!num || !times) return 
    if(typeof num !== 'number' || typeof times !== 'number') return
    let i=1
    function printNum(){
        if(i> times) return;
        console.log(`${num} * ${i} = ${num * i}`)
        i++
        setTimeout(printNum,1000)
    }
    printNum()
   
// return num;
}

console.log(multiplicationTable(5,10))