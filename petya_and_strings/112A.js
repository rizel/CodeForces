// status:
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
    const first_string = readline().toLowerCase();
    const second_string = readline().toLowerCase();
    let answer = undefined;

    answer = (first_string < second_string) ? -1 : (first_string > second_string ) ? 1 : 0 ;
    console.log(answer);
}