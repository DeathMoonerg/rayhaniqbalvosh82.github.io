const typingText = document.querySelector('.typing-text');
const textArray = ['PROGRAMER', 'ANIMATOR' ,'DESIGNER'];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex][charIndex];
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        // Alternate between texts
        textIndex = (textIndex + 1) % textArray.length;
        charIndex = 0;
        setTimeout(typeText, 500);
    }
}

// Start the typing effect
typeText();