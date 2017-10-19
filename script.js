//add variable to check which mode is selected
var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy-btn");
var hardBtn = document.querySelector("#hard-btn");

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected-mode");
  hardBtn.classList.remove("selected-mode");
  //declare the number of squares generated for easy mode
  numOfSquares = 3;
  colors = generateRandomColor(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#232323";
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected-mode");
  easyBtn.classList.remove("selected-mode");
  //declare the number of squares generated for hard mode
  numOfSquares = 6;
  colors = generateRandomColor(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#232323";
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].style.display = "block";
  }
});

//reset button
reset.addEventListener("click", function() {
  if (numOfSquares === 6) {
    colors = generateRandomColor(6);
  } else {
    colors = generateRandomColor(3);
  }
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
  reset.textContent = "New Colors ";
});

//changed display text by pickedColor
colorDisplay.textContent = pickedColor;

//loop to generate square color
for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];

  square[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "correct";
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
