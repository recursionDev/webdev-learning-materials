var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor();
var hSelect = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#easy");

easyButton.addEventListener("click", function () {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	hSelect.style.backgroundColor = "steelblue";
	for (var i = 0, l = squares.length; i < l; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function () {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	hSelect.style.backgroundColor = "steelblue";
	for (var i = 0, l = squares.length; i < l; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function () {
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	hSelect.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i = 0, l = squares.length; i < l; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});

colorDisplay.textContent = pickedColor;

for (var i = 0, l = squares.length; i < l; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Winner winner chicken dinner!";
			changeColors(clickedColor);
			hSelect.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}

function changeColors(color) {
	for (var i = 0, l = squares.length; i < l; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr[i] = randomColor();
	}

	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
