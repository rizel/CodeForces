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
var scores_counter = []; // a global array of objects

function locateInCounter(score){
    let found = false;
    for (let sc_index = 0; ((sc_index < scores_counter.length) && !(found)); sc_index++){
        if (score == scores_counter[sc_index]["score"]){
            scores_counter[sc_index]["quantity"]++;
            found = true;
        }
    }
    if (!found){
        scores_counter[scores_counter.length] = {
            "score"     : score,
            "quantity"  : 1,
        }; 
    }
}

function main() {
    const input_line          = readline().split(" ");
    const number_participants = input_line[0]; // not necessary
    const minimum_places      = input_line[1];
    const scores = readline().split(" ");

    // preparing scores of participants
    scores.sort((a,b) => b-a); // also sorted, descending
    // console.log(scores);

    for (let i=0; i<scores.length; ++i){
        locateInCounter(parseInt(scores[i]));
    }
    scores_counter.sort((a, b) => b["score"]-a["score"]);
    // console.log(scores_counter);
    
    // processing required information
    let position = 1;
    let ith_participant_score;
    do {
        ith_participant_score = scores[minimum_places-position];
        position++;
    } while ((ith_participant_score == 0) && (minimum_places-position)>=0);

    if (ith_participant_score == 0){
        console.log(0);
        return;
    }
    let number_passing_participants = 0;
    for (let i=0; i<scores_counter.length; i++) {
        if (scores_counter[i]["score"] >= ith_participant_score){
            number_passing_participants += scores_counter[i]["quantity"];
        }
        else{
            i = scores_counter.length;
        }
    }
    console.log(number_passing_participants);
}