let correct;
let false1;
let false2;
let false3;
let false4;
let score = 0;
let posRight;

//onclikc compare with correct porblem: gloabl variables declare y (Stremaer number, not position)
//display image
//next = clear all start new game



function newGame () {


    let rand1 = Math.floor(Math.random() * 100);  //number for correctAnswer
    let rand10 = Math.floor(Math.random() * 100);  //random number for photo

    posRight = Math.floor(Math.random() * 5);  //Position for the right answer


    rand1 = 1;
    rand2 = 2;
    rand10 = 1;



    guessPic (rand1, rand10);

    correct = createGuess (rand1, true, posRight);

    false1 = createGuess (rand1, false, posRight, 0);
    false2 = createGuess (rand1, false, posRight, 1, false1);
    false3 = createGuess (rand1, false, posRight, 2, false1, false2);
    false4 = createGuess (rand1, false, posRight, 3, false1, false2, false3);
}





function createGuess (a1, a2, a3, a4, a5 ,a6, a7) {  //1:rand1, 2:boolean, 3: posRight, 4: posFalse, 5,6,7: falseGuesses
    let y;
    let guess;

    if (a2 == true) {                            //assign random number y for switch
        y = a1;
    }
    else {
        do {
            y = Math.floor(Math.random() * 11);  
        }
        while (y == a1 || y == a5 || y == a6 || y == a7);
    }
  
    


    switch (y) {                       //create guess based on y
        case 0:
            guess = "Inscope";
            break;
        case 1:
            guess = "Reved";
            break;
        case 2:
            guess = "Unge";
            break;
        case 3:
            guess = "Monte";
            break;
        case 4:
            guess = "Sascha";
            break;
        case 5:
            guess = "TryMacs";
            break;
        case 6:
            guess = "Knossi";
            break;
        case 7:
            guess = "Papaplatte";
            break;
        case 8:
            guess = "Justin";
            break;
        case 9:
            guess = "JulienBam";
            break;
        case 10:
            guess = "Regina";
            break;
        case 11:
            guess = "Streamer7";
            break;
    }



    if (a2 == true) {                                         //assign it to the table
       document.getElementById(`ii${a3}`).innerHTML= `${guess}`;
    }
    else {
        if (a4 == a3) {
            a3 = 4;
        }
        else {
            a3 = a4;
        }
        document.getElementById(`ii${a3}`).innerHTML= `${guess}`;
    }


    return y;
}





function guessPic (x, y) { //display guessPic based on rand1
    document.getElementById(`imgi`).innerHTML= `<img src="img${x}/infl${y}.jpg" style="width: 100%; max-height: 800px;" >`;
 }
 
 function solutionPic (y) {
     document.getElementById(`imgi`).innerHTML= `<img src="img1/infl${y}.png" style="width: 100%; max-height: 800px; " >`;
 }

 function compareStr (x) {
     if (posRight == x) {
         score ++;
         console.log(score);
         newGame ();

     }
     else {
         console.log("fail");
     }
 }
 