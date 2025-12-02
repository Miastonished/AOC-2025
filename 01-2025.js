const fs = require('node:fs');



input = fs.readFileSync('01-2025.txt', 'utf8');


let dial = 50;
let parsedInput = input.split("\r\n"); // so sorry 
let output = [];
//console.log(parsedInput);
let zeroAmount = 0;
let i = 0;

while(i < parsedInput.length){
    
    //console.log(parsedInput[i]);
    
    
    turnAmount = parsedInput[i].substring(1);
    //console.log(turnAmount);
    if(parsedInput[i][0] == "R"){
        while(turnAmount > 0) {
            dial++;
            turnAmount--;
            if(dial == -1) dial = 99;
            if(dial == 100) dial = 0;
            if(dial == 0) zeroAmount++;
        }
    } else {
        while(turnAmount > 0) {
            dial--;
            turnAmount--;
            if(dial == -1) dial = 99;
            if(dial == 100) dial = 0;
            if(dial == 0) zeroAmount++;
        }
    }
 
    //console.log(dial);
    
    output.push(dial)
    
    i++;
    
}

console.log(output);

//output.forEach( a => { if(a == 0) zeroAmount++; });

console.log(zeroAmount);
/*

*/

/*

    if(parsedInput[i][0] == "R"){
        dial += parseInt(turnAmount)
    } else {
        dial -= turnAmount
    }
    
    if(dial > 0) dial
    dial = mod(dial,100);
    
*/
