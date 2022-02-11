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
    const numberOfProblems = readline();
    var totalPossibilities = 0;
    var currentPossibilities = 0;
    for (let i=1; i<=numberOfProblems; i++) {
        currentPossibilities = readline().split(' ').reduce(
            (prev, current, index, array) => parseInt(prev) + parseInt(current)
        );
        if (currentPossibilities > 1){
            ++totalPossibilities;
        }
    }
    console.log(totalPossibilities);
}