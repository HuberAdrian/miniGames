let final_score;
const List=document.getElementById("highscores");


function gameEnds (event) {

    if (event.persisted) {
        window.location.href = "own local.html";
    } 

    final_score = sessionStorage.getItem("scor3");
    document.getElementById("score_display").innerHTML = `${final_score}`;

    get_scores (scores);
}

function startAgain () {    //when Nochmal spielen is clicked, start again
    window.location.href = "own local.html";
}




// Function to get the high score JSON
function get_scores (callback){
    let file="scores.json";// file location
    fetch(file,{cache: "no-cache"}) // fetch
        // If the response isn OK
         .then(function(response){
             if (response.status !==200){
                 Errors.innerHTML=response.status;
            }
         // If the response is OK
         response.json().then(function(data){
             let scores=JSON.stringify(data);
             console.log(data);
             callback (scores);
        })
    })
    // If there is an error
    .catch(function(err){
         Errors.innerHTML=err;
    }); 

}

//Function to display high score list
var list_scores=function (scores){
     let object=JSON.parse(scores);
     let lowest_score=object[9].score;
     document.getElementById("lowscore").value=lowest_score;
     for (let i=0; i<object.length; i++){
         let li=document.createElement("LI");
         let text=document.createTextNode(object[i].name + " ... " + object[i].score);
         li.appendChild(text);
         List.appendChild(li);
        if (i===0){
            li.setAttribute("class","top1");
       }
        if (i===1){
            li.setAttribute("class","top2");
       }
        if (i===2){
                    li.setAttribute("class","top3");
       }
    }
}