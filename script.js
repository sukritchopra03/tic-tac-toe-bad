console.log("Hello Fellow DEV!");

let col1 = null;
let col2 = null;

let color1 = document.querySelector(".colorselect11");
let color2 = document.querySelector(".colorselect12");
let color3 = document.querySelector(".colorselect13");
let color4 = document.querySelector(".colorselect21");
let color5 = document.querySelector(".colorselect22");
let color6 = document.querySelector(".colorselect23");

let colorname;
let colorname2;

color1.addEventListener("click", function() {
    color1.style.border = "3px solid black";
    color2.style.border = "";
    color3.style.border = "";

    col1 = window.getComputedStyle(color1).backgroundColor;
    // console.log(col1);
   colorname="Red";
});

color2.addEventListener("click", function() {
    color1.style.border = "";
    color2.style.border = "3px solid black";
    color3.style.border = "";
    col1 = window.getComputedStyle(color2).backgroundColor;
// console.log(col1);
   colorname="Blue";
});

color3.addEventListener("click", function() {
    color1.style.border = "";
    color2.style.border = "";
    color3.style.border = "3px solid black";

    col1 = window.getComputedStyle(color3).backgroundColor;
    // console.log(col1);
colorname="Green";  
});

color4.addEventListener("click", function() {
    color4.style.border = "3px solid black";
    color5.style.border = "";
    color6.style.border = "";
col2 = window.getComputedStyle(color4).backgroundColor;
// console.log(col2);
 colorname2="Yellow";
});

color5.addEventListener("click", function() {
    color4.style.border = "";
    color5.style.border = "3px solid black";
    color6.style.border = "";
   col2 = window.getComputedStyle(color5).backgroundColor;
// console.log(col2);
   colorname2="Orange";
 
});

color6.addEventListener("click", function() {
    color4.style.border = "";
    color5.style.border = "";
    color6.style.border = "3px solid black";
col2 = window.getComputedStyle(color6).backgroundColor;
// console.log(col2);
  colorname2="Pink";
});


document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const bodie=document.getElementsByTagName("body");
    const squares = document.querySelectorAll(".square");
    let startButtonOne = document.getElementById("start-button-one");
    const resetButton = document.querySelector(".button");
    const welcomeScreen = document.querySelector(".welcome-screen");
    const gameContainer = document.querySelector(".grandfather-box");
const ColorSelect=document.querySelector(".color-choose");
    let iteration = 1;
    let gameOver = true; // Set gameOver to true initially
    resetButton.style.display = "none"; // Hide reset button initially



    // Event listener for start button
    startButtonOne.addEventListener("click", function() {
        if(col1===null || col2===null){
            alert("Please select colors for both players");
            return;
        }
        console.log("yo go away");
        welcomeScreen.style.display = "none"; // Hide welcome screen
        gameContainer.style.display = "block"; // Show game board
        resetButton.style.display = "block"; // Show reset button
        ColorSelect.style.display="none";
        // bodie.style.height="120vh";
       const para = document.createElement("p");
const node = document.createTextNode("Don't Come Here. Play the game bozo!.");
para.appendChild(node);

// Append the paragraph to the body of the document
document.body.appendChild(para);

        resetButton.style.backgroundColor = "red";
        resetButton.style.marginBottom  = "-100px";
        gameContainer.style.marginBottom  = "640px";
        gameOver = false; // Set gameOver to false to allow gameplay
    });

    // Event listener for squares
    squares.forEach(function(square) {
        square.addEventListener("click", function() {
            if (gameOver || square.querySelector(".icon") || square.querySelector(".icon1")) {
                return;
            }

            // Create and append icons
            if (iteration % 2 !== 0) {
                let cross = document.createElement("div");
                cross.classList.add("icon1");
                cross.innerHTML = `
                    <div class="cross1"></div>
                    <div class="cross2"></div>
                `;
                square.appendChild(cross);
                square.style.backgroundColor = col1;
            } else {
                let icon = document.createElement("div");
                icon.classList.add("icon");
                icon.classList.add("circle");
                square.appendChild(icon);
                square.style.backgroundColor = col2;
            }
            iteration++;

            // Check for win condition
            checkWin();
        });
    });

    // Function to check for draw condition
    function checkDraw() {
        let allFilled = true;
        squares.forEach(function(square) {
            if (!square.querySelector(".icon") && !square.querySelector(".icon1")) {
                allFilled = false;
            }
        });
        if (allFilled) {
            setTimeout(function() {
                alert("It's a draw!");
            }, 500);
            setTimeout(function() {
                window.location.reload();
            }, 1000);
            gameOver = true;
        }
    }

    // Function to check for win condition
    function checkWin() {
        const positions = [
            [".one", ".two", ".three"],
            [".four", ".five", ".six"],
            [".seven", ".eight", ".nine"],
            [".one", ".four", ".seven"],
            [".two", ".five", ".eight"],
            [".three", ".six", ".nine"],
            [".one", ".five", ".nine"],
            [".three", ".five", ".seven"]
        ];

        for (let pos of positions) {
            let [a, b, c] = pos.map(selector => document.querySelector(selector));
            if (a.style.backgroundColor === col1 && b.style.backgroundColor === col1 && c.style.backgroundColor === col1) {
                setTimeout(function() {
                    alert(`${colorname} wins!`);
                }, 500);
                setTimeout(function() {
                    window.location.reload();
                }, 1000);
                gameOver = true;
                return;
            } else if (a.style.backgroundColor === col2 && b.style.backgroundColor === col2 && c.style.backgroundColor === col2) {
                setTimeout(function() {
                    alert(`${colorname2} wins!`);
                }, 500);
                setTimeout(function() {
                    window.location.reload();
                }, 1000);
                gameOver = true;
                return;
            }
        }

        // Check for draw if no winner is found
        checkDraw();
    }

    // Event listener for reset button
    resetButton.addEventListener("click", function() {
        window.location.reload();
    });
});
