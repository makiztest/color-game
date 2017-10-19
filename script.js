var numOfSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

//put everything that needs to run when the page loads
init();

function init() {
  modeButtons();
  squareOnClick();
  reset();
}

function modeButtons() {
  //mode button event listeners (good for future update if decided to add additional game modes)
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function() {
      mode[0].classList.remove("selected-mode");
      mode[1].classList.remove("selected-mode");
      this.classList.add("selected-mode");
      this.textContent === "Easy" ? (numOfSquares = 3) : (numOfSquares = 6);
      reset();
    });
  }
}

function squareOnClick() {
  //set up square listeners
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        changeAllColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        reset.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

//reset the value based on selected mode
function reset() {
  colors = generateRandomColor(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  reset.textContent = "New Colors ";
  messageDisplay.textContent = "";
}

//reset button
resetBtn.addEventListener("click", function() {
  reset();
});

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
