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
    const table_size = readline().split(" ");
    const rows = table_size[0];
    const columns = table_size[1];

    const total_possibilites = Math.floor((rows * columns)/2);
    console.log(total_possibilites);
}