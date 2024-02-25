// Set initial state based on whether the sidebars are initially hidden or not
window.addEventListener("DOMContentLoaded", (event) => {
  // sidebar variables
  const leftSidebar = document.getElementById("leftSidebar");
  const rightSidebar = document.getElementById("rightSidebar");
  const toggleIconL = document.getElementById("toggleIconL");
  const toggleIconR = document.getElementById("toggleIconR");
  // const toggleIconNav = document.getElementById('toggleIconNav');

  // canvas variables
  const canvas = document.getElementById("gridCanvas");
  canvas.width = 600;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");
  let cellSize = 20;
  let wallColor = "#c34037";
  let floorColorHex = document.getElementById("floor-color-hex");
  let floorColor = document.getElementById("floor-color");
  // track the state of the mouse
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  // wall variables
  let wallWidth = parseInt(localStorage.getItem("walls-width-number"), 10) || 1;

  let wallWidthRange = parseInt(localStorage.getItem("walls-width"), 10) || 1;

  // Draw our initial grid
  drawGrid(ctx, canvas.width, canvas.height, cellSize);

  // Assume sidebars are initially visible; adjust if they start off hidden
  leftSidebarOpen = !leftSidebar.classList.contains("hidden");
  rightSidebarOpen = !rightSidebar.classList.contains("hidden");
  navbarOpen = !navbar.classList.contains("hidden");
  // Set the initial rotation of the toggle icons
  toggleIconL.style.transform = leftSidebarOpen
    ? "rotate(180deg)"
    : "rotate(0deg)";
  toggleIconR.style.transform = rightSidebarOpen
    ? "rotate(180deg)"
    : "rotate(0deg)";
  // toggleIconNav.style.transform = navbarOpen ? 'rotate(180deg)' : 'rotate(0deg)';

  // Event listeners
  canvas.addEventListener("mousedown", (event) => {
    isDrawing = true[(lastX, lastY)] = getMousePos(canvas, event);
  });
  canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) {
      return;
    }
    const [x, y] = getMousePos(canvas, event);
    drawSquare(ctx, x, y, cellSize, floorColor)[(lastX, lastY)] = [x, y];
  });
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    console.log(rect);
    const scaleX = canvas.width / rect.width; // Adjust for any CSS scaling
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    drawSquare(ctx, x, y, cellSize, floorColor);
  });

function getMousePos(canvas, event){
  	const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width; // Adjust for any CSS scaling
    const scaleY = canvas.height / rect.height;
	return [
    	(event.clientX - rect.left) * scaleX,
    	(event.clientY - rect.top) * scaleY
	]
}

  floorColorHex.addEventListener("input", (event) => {
    floorColorHex.value = event.target.value;
    floorColor.value = event.target.value;
  });
  floorColor.addEventListener("input", (event) => {
    floorColor.value = event.target.value;
    floorColorHex.value = event.target.value;
  });

  window.addEventListener("resize", () => {
    if (resizeCanvasToDisplaySize(canvas)) {
      drawGrid(ctx, canvas.width, canvas.height, cellSize);
    }
  });
});

// save wall width to local storage
let wallWidth = document.getElementById("walls-width-number");
wallWidth.addEventListener("input", () => {
  wallWidth = parseInt(event.target.value, 10);
  localStorage.setItem("walls-width-number", wallWidth);
});

function drawGrid(ctx, w, h, size) {
  ctx.beginPath();
  ctx.strokeStyle = "black"; // Set grid line color
  ctx.lineWidth = 2;

  // Draw vertical lines
  for (let x = 0; x <= w; x += size) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
  }

  // Draw horizontal lines
  for (let y = 0; y <= h; y += size) {
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
  }

  ctx.stroke(); // Apply the paths to the canvas
}

function drawSquare(ctx, x, y, size, floorColor) {
  const startX = size * Math.floor(x / size);
  const startY = size * Math.floor(y / size);
  console.log(floorColor.value);
  ctx.fillStyle = floorColor.value;
  ctx.fillRect(startX, startY, size, size);
}

// TODO: add function to adjust for ratio of canvas size to display size
function resizeCanvasToDisplaySize(canvas) {
  const canvasWidth = canvas.clientWidth;
  const canvasHeight = canvas.clientHeight;
  if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    return true;
  }
  return false;
}

function toggleSidebarL() {
  const leftSidebar = document.getElementById("leftSidebar");
  const toggleIconL = document.getElementById("toggleIconL");
  leftSidebar.classList.toggle("hidden");
  leftSidebarOpen = !leftSidebarOpen;
  toggleIconL.style.transform = leftSidebarOpen
    ? "rotate(180deg)"
    : "rotate(0deg)";
}

function toggleSidebarR() {
  const rightSidebar = document.getElementById("rightSidebar");
  const toggleIconR = document.getElementById("toggleIconR");
  rightSidebar.classList.toggle("hidden");
  rightSidebarOpen = !rightSidebarOpen;
  toggleIconR.style.transform = rightSidebarOpen
    ? "rotate(180deg)"
    : "rotate(0deg)";
}

// function toggleNavbar() {
//     console.log('toggleing navbar');
//     const navbar = document.getElementById('navbar');
//     const toggleIconNav = document.getElementById('toggleIconNav');
//     navbar.classList.toggle('hidden');
//     navbarOpen = !navbarOpen;
//     toggleIconNav.style.transform = navbarOpen ? 'rotate(180deg)' : 'rotate(0deg)';
//     const movesWithNavbar = document.getElementById('nav-adjustment');
//     movesWithNavbar.classList.toggle('pl-72')
// }
