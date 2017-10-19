var colors = generateRandomColor(6)
var square = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

reset.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColor(6);
    //pick a new random colors from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < square.length; i++) {
        //this will result square[index number or array] with backgroundColor style of the generated random color
        square[i].style.backgroundColor = colors[i];
    }
    //change backgroundColor
    h1.style.backgroundColor = "#232323"
    //change textContent
    reset.textContent = "New Colors "
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "correct";
            changeAllColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again";
        }
    });
}

function changeAllColor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//
function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}