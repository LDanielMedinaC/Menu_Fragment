var currentColor = 0;
var oval = document.getElementsByClassName("oval");
var preColor = 0;
document.getElementById("body").addEventListener("click", changeColor);


function changeColor() {
    preColor = currentColor;
    currentColor++;
    currentColor %= 4;
    for (var i = 0; i < 9; i++) {
        
        oval[i].classList.remove("color" + preColor);
        oval[i].classList.add("color" + currentColor);
        
    }

}
