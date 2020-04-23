var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var squareNum = 6;

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    squareNum = 3;
    colors = generateRandomColors(squareNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }//if
    }//for
});

hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    squareNum = 6;
    colors = generateRandomColors(squareNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(squareNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});



colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add event listeners to squares
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent =  "CORRECT!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?"
        }else{
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent =  "TRY AGAIN!.";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++ ){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function  pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
     //pick a "red" from 0 - 255
     var r = Math.floor(Math.random() * 256);
     //pick a "green" from 0 - 255
     var g = Math.floor(Math.random() * 256);
     //pick a "blue" from 0 - 255
     var b = Math.floor(Math.random() * 256);

     return "rgb(" + r + ", " + g + ", " + b + ")";
}