document.querySelector("#image").addEventListener("mousedown", sourisEnBas)
document.querySelector("#image").addEventListener("mouseup", sourisEnHaut)
// document.querySelector('#multiplier').addEventListener('click', multiplier)


const audioElement = new Audio('son/hub.mp3');
document.querySelector('#image').addEventListener('click', audio)
function audio(){
    audioElement.play()
}

function sourisEnBas(){
    document.querySelector("#image").src= "images/bonhomme2.png"
}
function sourisEnHaut(){
    document.querySelector("#image").src= "images/bonhomme1.png"
}

var score = 0
var nb_oeufs_par_click = 1
var bonus_multiplier = 50
var bonus_auto_clicker = 60
var phrase = 10

document.querySelector("#image").addEventListener("click", aJourResult)

function aJourResult(){
    score = score + nb_oeufs_par_click
    document.querySelector("#result").innerHTML= "Oeufs cassés: "+ score;
}

function multiplier(){
    if (score >= bonus_multiplier){
        nb_oeufs_par_click = 2;
        score = score - bonus_multiplier;
        document.querySelector("#result").innerHTML= "Oeufs cassés: "+ score;
    } else {
        alert("NAN");
    }
}

function bonus_clicker() {
    if(score>= bonus_auto_clicker){
    setInterval(aJourResult, 1000)
    score= score - bonus_auto_clicker
    }
    else{
        alert ("pas assez de tunes !");
    }
}

function apparition_phrase(){
    if((score >= phrase )){
        document.querySelector("#phrase").innerHTML;
    }
    
    

}





