// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded);

var startTime;
var limiteM;
var limiteS;
var temporizador;


function documentLoaded() {
    document.getElementsByClassName("container")[0].addEventListener("click", clicked);;
}

function botaoClicked() {
    startTime = new Date();

    limiteM = parseInt(document.getElementById("txtTempoM").value);
    limiteS = parseInt(document.getElementById("txtTempoS").value);
    if(isNaN(limiteM)){
        limiteM = 0;
    }
    if(isNaN(limiteS)){
        limiteS = 0;
    }
    clearInterval(temporizador);
    temporizador = setInterval(updateTime, 1000);
}

function clicked(evt) {
    // get the <input> and check if it is hidden
    var inputM = this.querySelector("#txtTempoM");
    var inputS = this.querySelector("#txtTempoS");
    
    var labelM = this.querySelector("#clockM");
    var labelS = this.querySelector("#clockS");
    
    clearInterval(temporizador);
    
    document.getElementsByClassName("container")[0].classList.add("blue");
    document.getElementsByClassName("container")[0].classList.remove("red");
    inputM.value = null;
    inputS.value = null;
    
    if (evt.target === inputM || evt.target === inputS) {
        // if user clicked on <input> do nothing, he is editing

    } else if (evt.target === labelM || evt.target === labelS ) {
        // <input> was hidden, make it visible
        inputM.classList.remove("hide");
        inputS.classList.remove("hide");
        
        // and hide the label
        labelM.classList.add("hide");
        labelS.classList.add("hide");

        // fill the <input> with the text from the label

        // adicionar o listener para detectar o fim da edicao com "ENTER"
        inputM.addEventListener("keydown", function keydown(evt) {

            // 13 is the code for ENTER
            if (evt.keyCode === 13) {
                labelM.classList.remove("hide");
                labelS.classList.remove("hide");
            
                inputM.classList.add("hide");
                inputS.classList.add("hide");

                // its important to remove the keydown listener, otherwise in a subsequent edit
                // we will end up with several keydown listeners running
                
                document.getElementById("clockM").innerHTML = 00;
                document.getElementById("clockS").innerHTML = 00;
                inputM.removeEventListener("keydown", keydown);
                botaoClicked();
            }

        });
        inputS.addEventListener("keydown", function keydown(evt) {
            if (evt.keyCode === 13) {
                labelM.classList.remove("hide");
                labelS.classList.remove("hide");
            
                inputM.classList.add("hide");
                inputS.classList.add("hide");

                // its important to remove the keydown listener, otherwise in a subsequent edit
                // we will end up with several keydown listeners running
                inputS.removeEventListener("keydown", keydown);
                botaoClicked();
            }

        });
        inputM.focus();
        inputS.focus();
    } else {
        // <input> was visible, hide it without modifying the value
        input.classList.add("hide");

        // show the label
        label.classList.remove("hide");
    }

}

function updateTime() {
    "use strict";
    
    console.log(limiteM)
    // read the current time
    var currentTime = new Date();

    // calculate how many seconds passed since the start of the timer
    var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

    // convert seconds to minutes and seconds (below 60)
    var minutos = Math.floor(elapsed / 60);
    var segundos = Math.floor(elapsed % 60);

    // pad with zeroes on the left to look better
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    // show the elapsed time
    document.getElementById("clockM").innerHTML = minutos;
    document.getElementById("clockS").innerHTML = segundos;

    // check if we are above the time limit and set the color of the timer accordingly
    if ((minutos == limiteM && segundos >= limiteS) || minutos > limiteM) {
        document.getElementsByClassName("container")[0].classList.add("red");
        document.getElementsByClassName("container")[0].classList.remove("blue");
    } else {
        document.getElementsByClassName("container")[0].classList.add("blue");
        document.getElementsByClassName("container")[0].classList.remove("red");
    }

}