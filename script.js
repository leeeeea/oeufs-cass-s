document.querySelector("#image").addEventListener("mousedown", sourisEnBas)
document.querySelector("#image").addEventListener("mouseup", sourisEnHaut)
// document.querySelector('#multiplier').addEventListener('click', multiplier)


const audioElement = new Audio('son/oeuf.mp3');
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
var phrase = 100

document.querySelector("#image").addEventListener("click", aJourResult)

function aJourResult(){
    score = score + nb_oeufs_par_click
    document.querySelector("#result").innerHTML= "Oeufs cassés: "+ score;
    // apparition_phrase()
    
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

let phrases_aleatoires=["Les oeufs durent c'est 9mn","Les oeufs au plat c'est les meilleurs","je sais pas","aïe!"];

let interval_apparition_texte = undefined;

function apparition_phrase(){ 
    if (interval_apparition_texte == undefined) {
        interval_apparition_texte = setInterval(apparition_phrase, 10000)
    }
    if((score >= phrase )){
   
    var arrete = Math.trunc (Math.random()*phrases_aleatoires.length)
     document.querySelector("#phrase1").innerHTML= phrases_aleatoires[arrete]
     }   
}
apparition_phrase()


