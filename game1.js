let currentCount = 1; // Start counting from 1
const countDisplay = document.getElementById('countDisplay');
const buttonsContainer = document.getElementById('buttonsContainer');
const messageDisplay = document.getElementById('message');

// Display the initial count
countDisplay.innerText = `Count: ${currentCount}`;

// Create buttons for counting upwards
function createButtons() {
    buttonsContainer.innerHTML = ''; // Clear any existing buttons
    const numbers = []; // Array to hold numbers for buttons

    // Populate the array with numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
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
    if (guess === currentCount) {
        messageDisplay.innerText = "Correct! Next number:";
        currentCount++; // Increase count for the next round
        if (currentCount <= 5) {
            countDisplay.innerText = `Count: ${currentCount}`;
            createButtons(); // Create new buttons for the next number
        } else {
            messageDisplay.innerText = "Great job! You've counted up to 5!";
            createConfetti(); // Call the confetti function here
            currentCount = 1; // Reset the game
            countDisplay.innerText = `Count: ${currentCount}`;
            createButtons(); // Create buttons for reset
        }
    } else {
        messageDisplay.innerText = `Wrong! Try again. The current count is still ${currentCount}.`;
    }
}

// Initial call to create buttons
createButtons();
