// Dashboard JavaScript File ::


const text = `Hello  , ` +  ` I'm Yash James. `; // The text to be typed
const speed = 80; // Speed of typing (in milliseconds)
const typedTextElement = document.getElementById("typed-text");
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    typedTextElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, speed);
  }
}

type();


window.addEventListener("load", function() {
  const loaderOverlay = document.getElementById("loader-overlay");
  loaderOverlay.style.display = "none";
});

