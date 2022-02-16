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
/*******************************/
function main() {
    const input_line          = readline().split(" "); // two values
    const from_place          = input_line[1]-1;
    const scores              = readline().split(" ");
    let number_participants   = 0;

    // preparing scores of participants
    scores.sort((a,b) => b-a); // sorted, descending
    // console.log(scores);
    const from_place_updated = scores.lastIndexOf(scores[from_place]);

    for (let i=from_place_updated; i>=0; i--){
        if (scores[i]>0){
            number_participants++;
        }
    }
    console.log(number_participants);
}