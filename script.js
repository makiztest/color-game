var colors = [
    "rgb(255, 0, 0)", //red
    "rgb(0, 255, 0)", //green
    "rgb(255, 255, 0)", //yellow
    "rgb(0, 0, 255)", //blue
    "rgb(0, 255, 255)", //cyan
    "rgb(255, 0, 255)", //magenta
]

var square = document.querySelectorAll(".square")

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
}