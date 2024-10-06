function createConfetti() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const numberOfConfetti = 150; // Total number of confetti pieces for a fuller effect

    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.classList.add(colors[Math.floor(Math.random() * colors.length)]); // Random color

        // Set random position and styles
        confetti.style.left = Math.random() * 100 + 'vw'; // Position across the viewport width
        confetti.style.animationDelay = Math.random() * 2 + 's'; // Random delay for each piece
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`; // Add initial rotation

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 4000); // Match this with the animation duration
    }
}

// Call createConfetti function when displaying the message
function checkGuess(guess) {
    if (guess === currentCount) {
        messageDisplay.innerText = "Correct! Next number:";
        currentCount++; // Increase count for the next round
        if (currentCount <= 5) {
            countDisplay.innerText = `Count: ${currentCount}`;
            createButtons(); // Create new buttons for the next number
        } else {
            messageDisplay.innerText = "Great job! You've counted up to 5!";
            createConfetti(); // Create confetti when reaching 5
            currentCount = 1; // Reset the game
            countDisplay.innerText = `Count: ${currentCount}`;
            createButtons(); // Create buttons for reset
        }
    } else {
        messageDisplay.innerText = `Wrong! Try again. The current count is still ${currentCount}.`;
    }
}
