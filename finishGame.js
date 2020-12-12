let final_score;

let obj1 = [{"name":"Hatnix","score": 9},
    {"name":"Caysind","score": 8},
    {"name":"Ambrosine","score": 7},
    {"name":"Kozross","score": 6},
    {"name":"Jookia","score": 5},
    {"name":"Arthur","score": 4},
    {"name":"John Smith","score": 3},
    {"name":"Sir Diealot","score": 2},
    {"name":"Commander Candy","score": 1},
    {"name":"Robert","score": 0}]
;


function gameEnds (event) {

    if (event.persisted) {
        window.location.href = "own local.html";
    } 

    final_score = sessionStorage.getItem("scor3");
    document.getElementById("score_display").innerHTML = `${final_score}`;

    dsply();
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

/*//Function to display high score list
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
*/






function dsply () {


    let lowest_score=obj1[9].score;
     document.getElementById("lowscore").value=lowest_score;
     for (let i=0; i<obj1.length; i++){
         let li=document.createElement("LI");
         let text = document.createTextNode(obj1[i].name + " ... " + obj1[i].score);
         li.appendChild(text);
         document.getElementById("high_list").appendChild(li);
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
