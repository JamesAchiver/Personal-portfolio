// Typing Animation
const text = "Yash James - Web Developer";
const speed = 100;
const typedTextElement = document.getElementById("typed-text");

function typeText() {
    let charIndex = 0;
    function type() {
        if (charIndex < text.length) {
            typedTextElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", typeText);