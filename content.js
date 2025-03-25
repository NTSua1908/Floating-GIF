// Create the floating image container
const floatDiv = document.createElement("div");
floatDiv.id = "floating-gif-container";

// Create the image element
const floatImg = document.createElement("img");
floatImg.id = "floating-gif";
floatDiv.appendChild(floatImg);

document.body.appendChild(floatDiv);

// Load saved GIF URL and position
chrome.storage.sync.get(["gifUrl", "gifPosition"], (result) => {
  floatImg.src =
    result.gifUrl ||
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmF5aG9jM2QwOHFxaTc3NzFtZ2ZkdDJuZGNhZzQ3aXJrMWlqbzFkNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UQ1EI1ML2ABQdbebup/giphy.gif";
  const position = result.gifPosition || { x: 50, y: 50 }; // Default position if none saved
  currentX = position.x;
  currentY = position.y;
  floatDiv.style.left = currentX + "px";
  floatDiv.style.top = currentY + "px";
});

// Make the image draggable
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;

floatDiv.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDragging);

function startDragging(e) {
  initialX = e.clientX - currentX;
  initialY = e.clientY - currentY;
  isDragging = true;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    floatDiv.style.left = currentX + "px";
    floatDiv.style.top = currentY + "px";
  }
}

function stopDragging() {
  if (isDragging) {
    isDragging = false;
    // Save the current position to storage
    chrome.storage.sync.set({
      gifPosition: { x: currentX, y: currentY },
    });
  }
}

// Listen for GIF URL updates from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.gifUrl) {
    floatImg.src = request.gifUrl;
  }
});
