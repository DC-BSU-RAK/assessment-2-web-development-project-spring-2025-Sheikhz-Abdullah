// Function to toggle the navigation menu open or closed
function toggleMenu() {

  // Toggles the "open" class on the <nav> element
  document.querySelector("nav").classList.toggle("open");
}

// Get the element that will follow the cursor (usually a styled div or similar)
const follower = document.getElementById('cursor-follower');

// Define the offset from the actual cursor position
const offsetX = 30; // Horizontal offset in pixels
const offsetY = 30; // Vertical offset in pixels

// Add an event listener for mouse movements on the whole document

document.addEventListener('mousemove', (e) => {
  // Update the position of the follower element based on cursor position + offset
  follower.style.left = `${e.clientX + offsetX}px`;
  follower.style.top = `${e.clientY + offsetY}px`;
});