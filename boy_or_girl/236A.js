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
    const name = readline();
    let letters = {}
    for (let i = 0; i < name.length; i++){
        if (name[i] in letters){
            letters[name[i]]++;
        }
        else{
            letters[name[i]] = 1;
        }
    }
    if (((Object.keys(letters).length) %2) == 0){
        console.log("CHAT WITH HER!");
    } else {
        console.log("IGNORE HIM!");
    }    
}