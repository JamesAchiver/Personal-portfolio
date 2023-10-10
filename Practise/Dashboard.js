// Dashboard JavaScript File ::

// Below codes represents the Loading animation
// Below codes represents the Loading animation

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

// Below codes represents the Splash welcome screen 
// Below codes represents the Splash welcome screen

document.addEventListener('DOMContentLoaded', function () {
  // Get the overlay and close button elements
  const overlay = document.getElementById('overlay');
  const closeOverlayButton = document.getElementById('closeOverlayButton');

  // Function to show the overlay
  function showOverlay() {
      overlay.style.display = 'flex';
  }

  // Function to close the overlay
  function closeOverlay() {
      overlay.style.display = 'none';
  }

  // Show the overlay when the page loads
  showOverlay();

  // Event listener to close the overlay when the close button is clicked
  closeOverlayButton.addEventListener('click', closeOverlay);
});
