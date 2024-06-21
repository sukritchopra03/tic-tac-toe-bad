document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const squares = document.querySelectorAll(".square");
    const startButton = document.querySelector(".start-button");
    const resetButton = document.querySelector(".button");
    const welcomeScreen = document.querySelector(".welcome-screen");
    const gameContainer = document.querySelector(".grandfather-box");

    let iteration = 1;
    let gameOver = true; // Set gameOver to true initially
    resetButton.style.display = "none"; // Hide reset button initially

    // Event listener for start button
    startButton.addEventListener("click", function() {
        welcomeScreen.style.display = "none"; // Hide welcome screen
        gameContainer.style.display = "block"; // Show game board
        resetButton.style.display = "block"; // Show reset button
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
                square.style.backgroundColor = "green";
            } else {
                let icon = document.createElement("div");
                icon.classList.add("icon");
                icon.classList.add("circle");
                square.appendChild(icon);
                square.style.backgroundColor = "rgba(0, 0, 255, 0.8)";
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
            if (a.style.backgroundColor === "green" && b.style.backgroundColor === "green" && c.style.backgroundColor === "green") {
                setTimeout(function() {
                    alert("Green wins!");
                }, 500);
                setTimeout(function() {
                    window.location.reload();
                }, 1000);
                gameOver = true;
                return;
            } else if (a.style.backgroundColor === "rgba(0, 0, 255, 0.8)" && b.style.backgroundColor === "rgba(0, 0, 255, 0.8)" && c.style.backgroundColor === "rgba(0, 0, 255, 0.8)") {
                setTimeout(function() {
                    alert("Blue wins!");
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
