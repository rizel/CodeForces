// status: ACCEPTED
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map( string => {
        return string.trim();
    });
    main();
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    const numberOfInstructions = readline();
    let instruction = "";
    let value = 0;
    for (let i = 1; i<= numberOfInstructions ; i++){
        instruction = readline();
        if (instruction[1] == '+'){
            value++;
        }
        else {
            value--;
        }
    }
    console.log(value);
}