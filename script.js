var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
//declare the var mode and select all
var mode = document.querySelectorAll(".mode");

//loop all mode class (good for future update if decided to add additional game modes)
for (var i = 0; i < mode.length; i++) {
  mode[i].addEventListener("click", function() {
    //remove the classlist of all modes
    mode[0].classList.remove("selected-mode");
    mode[1].classList.remove("selected-mode");
    //add class for clicked mode
    this.classList.add("selected-mode");
    //show how many squares to show
    if (this.textContent === "Easy") {
      numOfSquares = 3;
    } else {
      numOfSquares = 6;
    }
    //pick new colors
    //pick a new pickedColor
    //update page to show squares base on mode selected
    resetMode();
  });
}

//reset the value based on selected mode
function resetMode() {
  colors = generateRandomColor(numOfSquares)
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  reset.textContent = "New Colors ";
  messageDisplay.textContent = "";
}

//reset button
reset.addEventListener("click", function() {
  colors = generateRandomColor(numOfSquares)
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  this.textContent = "New Colors ";
  messageDisplay.textContent = "";
});

//changed display text by pickedColor
colorDisplay.textContent = pickedColor;

//loop to generate square color
for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];

  square[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeAllColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      reset.textContent = "Play again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "try again";
    }
  });
}

//change all color of square when picked the match rgb color
function changeAllColor(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

//generate the random pickedColor
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generate the number of randomColor generated and return all the generated array
function generateRandomColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

//generate random color of rgb from 0-255
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
