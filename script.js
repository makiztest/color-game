var colors = [
    "rgb(255, 0, 0)", //red
    "rgb(0, 255, 0)", //green
    "rgb(255, 255, 0)", //yellow
    "rgb(0, 0, 255)", //blue
    "rgb(0, 255, 255)", //cyan
    "rgb(255, 0, 255)", //magenta
]

var square = document.querySelectorAll(".square")
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
    //add initial colors to squares
    square[i].style.backgroundColor = colors[i];

    //add click listeners to square
    square[i].addEventListener("click", function() {
        //grab color of click square
        console.log(this.style.backgroundColor)
        //compare color to pickedColor
    });
}