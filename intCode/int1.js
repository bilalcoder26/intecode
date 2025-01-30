/*
5
54
543
5432
54321
*/

//golbal logic

for(let i=1;i<=5;i++){
    //console.log(i);
    let line="";
    for(j=5;j>=6-i;j--){
        line=line+j;
    }
    console.log(line);
}
function printNumbers(start, end = 1) {
    if (end > start) return; // Base condition to stop recursion
    console.log(Array.from({ length: end }, (_, i) => start - i).join(''));
    printNumbers(start, end + 1); // Recursive call
}
printNumbers(7);

