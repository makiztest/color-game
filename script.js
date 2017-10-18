var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
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
            messageDisplay.textContent = "correct";
            changeAllColor(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again";
        }
    });
}

function changeAllColor(color) {
    //change all square color picked the correct color
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}