let rand1;
let rand2;
let correct;
let false1;
let false2;
let false3;
let false4;
let score;
let posRight;
let decision;

//onclikc compare with correct porblem: gloabl variables declare y (Stremaer number, not position)
//display image
//next = clear all start new game


function firstfunc (event) {        //start game, prevent loading from cache
    if (event.persisted) {
        window.location.reload();
    } 
    score = 0;
    newGame ();
}


function newGame () {
    document.getElementById(`txen`).style.display= "none";

    rand1 = Math.floor(Math.random() * 15);  //number for correctAnswer
    rand10 = Math.floor(Math.random() * 15);  //random number for photo

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





function guessPic (x, y) { //display Pic based on rand1, rand10, true/false
    document.getElementById(`imgi`).innerHTML= `<img src="GuessPic/img${x}/infl${y}.png" style="width: 100%; max-height: 800px;" >`;
}
 

function compareStr (x) {
    setTimeout(function() {document.getElementById(`txen`).style.display= "inline-block";}, 500);

    let r = document.getElementsByName("Stream_er");
    let r1;
    for (r1 = 0; r1 < r.length; r1++)  {
        r[r1].disabled = true;
    } 

    if (posRight == x) {
         decision = true;
     }
     else {
         decision = false;
         document.getElementById(`iii${x}`).style.backgroundColor = "#FF0000";
     }

    document.getElementById(`iii${posRight}`).style.backgroundColor = "#32CD32";

    setTimeout(function() {document.getElementById(`imgi`).innerHTML= `<img src="SolutionPic/img${rand1}/infl${rand10}.png" style="width: 100%; max-height: 800px; " >`;}, 500);
 }


function txenfunc () {
    let t = document.getElementsByClassName("qp_col");
    let t1;

    for (t1 = 0; t1 < t.length; t1++) {
        t[t1].style.backgroundColor = "#f4f4f4";
    }


     if (decision == true) {
         score ++;
         document.getElementById("erocs").innerHTML= `${score}`;
         newGame ();

        let r = document.getElementsByName("Stream_er");
        let r1;
        for (r1 = 0; r1 < r.length; r1++)  {
        r[r1].disabled = false;
        } 
     }

     else {
        sessionStorage.setItem("scor3", `${score}`);
        window.location.href = "Gamefinish.html";
     }
}
