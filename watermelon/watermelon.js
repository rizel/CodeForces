// STATUS: ACCEPTED
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main(); 
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    var size = readline();
    if ((size % 2) == 0) {
        if (size == 2)
            console.log("NO");
        else
            console.log("YES");
    }
    else {
        // process.stdout.write("");
        console.log("NO");
    }
}

