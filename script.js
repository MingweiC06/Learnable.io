const optionsContainer = document.getElementById("options");
const countDisplay = document.getElementById("countDisplay");
const messageDisplay = document.getElementById("message");

let currentCount = 0;

function generateQuestion() {
    // Randomly generate a number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    countDisplay.textContent = `Count: ${randomNumber}`;
    
    // Generate answer options
    const options = [];
    options.push(randomNumber); // Correct answer
    while (options.length < 4) { // Generate 3 additional wrong answers
        const wrongAnswer = Math.floor(Math.random() * 5) + 1;
        if (!options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }
    
    // Shuffle the options
    options.sort(() => Math.random() - 0.5);
    
    // Create buttons for each option
    optionsContainer.innerHTML = ''; // Clear previous options
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-button";
        button.onclick = () => checkAnswer(option, randomNumber);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        messageDisplay.textContent = "Correct! Great job!";
        currentCount++;
    } else {
        messageDisplay.textContent = `Oops! The correct answer was ${correct}.`;
    }
    generateQuestion(); // Generate the next question
}

// Initialize the first question
generateQuestion();
