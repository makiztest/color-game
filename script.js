var colors = generateRandomColor(6)
var square = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy-btn")
var hardBtn = document.querySelector("#hard-btn")

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected-mode")
    hardBtn.classList.remove("selected-mode")
    //generate 3 random colors
    colors = generateRandomColor(3);
    //generate pickedColor
    pickedColor = pickColor();
    //update colorDisplay
    colorDisplay.textContent = pickedColor;
    //loop
    for (var i = 0; i < colors.length; i++) {
        //if 3 random colors is generated change bkg of those colors
        if(colors[i]) {
            square[i].style.backgroundColor = colors[i]
        }
    }
})
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected-mode")
    easyBtn.classList.remove("selected-mode")
})

reset.addEventListener("click", function() {
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323"
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