<<<<<<< HEAD
// script.js
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
 
=======
// script.js
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
 
>>>>>>> 6667eda (Updated -V 1.5.0)
