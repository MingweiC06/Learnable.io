let currentCount = 10; // Start counting from 10
const countDisplay = document.getElementById('countDisplay');
const buttonsContainer = document.getElementById('buttonsContainer');
const messageDisplay = document.getElementById('message');

// Display the initial count
countDisplay.innerText = `Count: ${currentCount}`;

// Create buttons for counting backwards
function createButtons() {
    buttonsContainer.innerHTML = ''; // Clear any existing buttons
    const numbers = []; // Array to hold numbers for buttons

    // Populate the array with numbers from 1 to currentCount - 1
    for (let i = currentCount - 1; i >= 1; i--) {
        numbers.push(i);
    }

    // Shuffle the array
    shuffleArray(numbers);

    // Create buttons with shuffled numbers
    numbers.forEach(number => {
        const button = document.createElement('button');
        button.innerText = number;
        button.onclick = () => checkGuess(number); // Check guess when button is clicked
        buttonsContainer.appendChild(button);
    });
}

// Function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Function to check the user's guess
function checkGuess(guess) {
    if (guess === currentCount - 1) {
        messageDisplay.innerText = "Correct! Next number:";
        currentCount--; // Decrease count for the next round
        if (currentCount >= 1) {
            countDisplay.innerText = `Count: ${currentCount}`;
            createButtons(); // Create new buttons for the next number
        } else {
            messageDisplay.innerText = "Great job! You've counted down to 1!";
            currentCount = 10; // Reset the game
            countDisplay.innerText = `Count: ${currentCount}`;
            createButtons(); // Create buttons for reset
        }
    } else {
        messageDisplay.innerText = `Wrong! Try again. The current count is still ${currentCount}.`;
    }
}

// Initial call to create buttons
createButtons();
