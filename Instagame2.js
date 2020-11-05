let correct;
let false1;
let false2;
let false3;
let false4;
let score = 0;
let posRight;
let decision;

//onclikc compare with correct porblem: gloabl variables declare y (Stremaer number, not position)
//display image
//next = clear all start new game



function newGame () {

    document.getElementById(`txen`).style.display= "none";

    let rand1 = Math.floor(Math.random() * 15);  //number for correctAnswer
    let rand10 = Math.floor(Math.random() * 15);  //random number for photo

    rand10 ++;

    posRight = Math.floor(Math.random() * 5);  //Position for the right answer



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
            y = Math.floor(Math.random() * 15);  
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
            guess = "Sascha Huber";
            break;
        case 5:
            guess = "Trymacs";
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
            guess = "Paluten";
            break;
        case 10:
            guess = "Regina";
            break;
        case 11:
            guess = "ApoRed";
            break;
        case 12:
            guess = "Tanzverbot";
            break;
        case 13:
            guess = "HandOfBlood";
            break;
        case 14:
            guess = "Rewi";
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
    document.getElementById(`imgi`).innerHTML= `<img src="GuessPic/img${x}/infl${y}.png" style="width: 100%; max-height: 800px;" >`;
 }
 
 function solutionPic (y) {
     document.getElementById(`imgi`).innerHTML= `<img src="img1/infl${y}.png" style="width: 100%; max-height: 800px; " >`;
 }

 function compareStr (x) {
    document.getElementById(`txen`).style.display= "inline-block";

     if (posRight == x) {
         decision = true;

     }
     else {
         decision = false;

     }
 }


 function txenfunc () {
     if (decision == true) {
         score ++;
         document.getElementById("erocs").innerHTML= `${score}`;
         newGame ();
     }

     else {
         //score in cookie abspeichern
         //endpage
     }
 }