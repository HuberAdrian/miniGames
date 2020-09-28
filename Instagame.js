let rand1;
let rand2;
let score = 0;



function function1 (x) {  //testfunction for onClick
    console.log(x);
}




function guessPic (x) { //display guessPic based on rand1
   document.getElementById(`imgi`).innerHTML= `<img src="img1/infl${x}.jpg" style="width: 100%; max-height: 800px;" >`;
}

function solutionPic (y) {
    document.getElementById(`imgi`).innerHTML= `<img src="img1/infl${y}.png" style="width: 100%; max-height: 800px; " >`;
}


function newGame () {
    rand1 = Math.floor(Math.random() * 100);
    rand2 = rand1 + 1;

    rand1 = 1;
    rand2 = 2;


    guessPic (rand1);

    createGuesses (rand1);
}


function createGuesses (x) {
    let z; //String for correctStreamer

    if (x < 100) {
        z = "Streamer1";
    }
    else if (100 <= x < 200 ) {
        z = "Streamer2";
    }

    else if (100 <= x < 200 ) {
        z = "Streamer3";
    }

    else if (100 <= x < 200 ) {
        z = "Streamer4";
    }

    else if (100 <= x < 200 ) {
        z = "Streamer5";
    }
    
    else if (100 <= x < 200 ) {
        z = "Streamer6";
    }
    
    let y = Math.floor(Math.random() * 5);  //number for the correct choice
    document.getElementById(`ii${y}`).innerHTML= `${z}`;

    createFalse (0, z, y);   // (Position, rightAnsw, positionRightAnsw)
    createFalse (1, z, y);
    createFalse (2, z, y);
    createFalse (3, z, y);
}


function createFalse (a, b, c) {
    let falseGu;
    do {
        let falseNum = Math.floor(Math.random() * 11); //decide which streamer

        switch (falseNum) {
            case 0:
                falseGu = "Inscope";
                break;
            case 1:
                falseGu = "Reved";
                break;
            case 2:
                falseGu = "Unge";
                break;
            case 3:
                falseGu = "Monte";
                break;
            case 4:
                falseGu = "Sascha";
                break;
            case 5:
                falseGu = "Streamer";
                break;
            case 6:
                falseGu = "Streamer2";
                break;
            case 7:
                falseGu = "Streamer3";
                break;
            case 8:
                falseGu = "Streamer4";
                break;
            case 9:
                falseGu = "Streamer5";
                break;
            case 10:
                falseGu = "Streamer6";
                break;
            case 11:
                falseGu = "Streamer7";
                break;
        }
    }
    
    while (falseGu === b || falseGu === " ");

    if (a === c) {
        a = 4;
        document.getElementById(`ii${a}`).innerHTML= `${falseGu}`;
    }

    else {
    document.getElementById(`ii${a}`).innerHTML= `${falseGu}`;
    }
}


//function onClick= compare / make guess red/green / score ++ or to scoreboard / change picture
// if correct, clear everything and create new Game



//bei create.right else if's hinzufügen / inner  
//onclick = false/right
//how to take variables from one htmlfile to another 
//how to change global scope variables

