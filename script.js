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
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            //when picked correct color show message correct
            messageDisplay.textContent = "correct"
        } else {
            //when picked wrong color show message try again
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again";
        }
    });
}