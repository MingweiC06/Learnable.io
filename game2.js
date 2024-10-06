const numberPrompt = document.getElementById('numberPrompt');
const numberDisplay = document.getElementById('numberDisplay');
const optionsContainer = document.getElementById('options');
const messageDisplay = document.getElementById('message');

// Function to generate a random number and options
function generateGame() {
    const correctNumber = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
    numberDisplay.innerText = correctNumber; // Display the number

    // Generate option buttons
    optionsContainer.innerHTML = ''; // Clear previous options
    let options = new Set();
    options.add(correctNumber); // Add the correct answer

    // Generate 3 more random numbers
    while (options.size < 4) {
        const randomNumber = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
        options.add(randomNumber);
    }

    // Convert Set to Array and shuffle it
    options = Array.from(options).sort(() => Math.random() - 0.5);

    // Create buttons for each option
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => checkAnswer(option, correctNumber));
        optionsContainer.appendChild(button);
    });
}

// Function to check if the answer is correct
function checkAnswer(selectedNumber, correctNumber) {
    if (selectedNumber === correctNumber) {
        messageDisplay.innerText = "Correct! Well done!";
    } else {
        messageDisplay.innerText = `Wrong! The correct number was ${correctNumber}. Try again!`;
    }
    generateGame(); // Generate a new game after answering
}

// Start the game
generateGame();
