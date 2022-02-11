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
    const numberOfWords = readline();
    var     word = '';
    for (let i=1; i<=numberOfWords; i++) {
        word = readline();
        // console.log(word);
        if (word.length > 10){
            word = word[0]+ (word.length-2) + word[word.length-1];
        }
        console.log(word);
    }
}