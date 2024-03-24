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
	const ctx = canvas.getContext('2d')
	let cellSize = 20;
	let floorColorElementHex = document.getElementById("floor-color-hex");
	let floorColorElement = document.getElementById("floor-color");
	// track the state of the mouse
	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;

	// wall variables
	let wallWidth = parseInt(localStorage.getItem("walls-width-number"), 10) || 1;
	let wallWidthRange = parseInt(localStorage.getItem("walls-width"), 10) || 1;

	// grid variables
	let gridColorElement = document.getElementById("grid-color");
	let gridColorElementHex = document.getElementById("grid-color-hex");
	let gridThicknessElement = document.getElementById('grid-thickness-number');
	let gridThicknessElementRange = document.getElementById('grid-thickness');
	let gridOpacityElement = document.getElementById('grid-opacity-number');
	let gridColor = gridColorElement.value;
	let gridThickness = gridThicknessElement.value;
	let gridOpacity = gridOpacityElement.value; 

	let gridOpacityElementRange = document.getElementById('grid-opacity')
	// Draw our initial grid
	drawGrid(ctx, canvas.width, canvas.height, cellSize, gridColorElement, gridThicknessElement, gridOpacity);

	document.querySelectorAll('.interactive-inputs').forEach(input => {
		loadSettings(); 
		input.addEventListener('input', (event) => {
			switch (event.target.id) {
				case 'grid-color':
				case 'grid-color-hex':
					gridColorElementHex.value = event.target.value;
					gridColorElement.value = event.target.value;
					localStorage.setItem('gridColor', event.target.value); 
					drawGrid(ctx, canvas.width, canvas.height, cellSize, gridColorElement, gridThicknessElement, gridOpacity)
					break;
				case 'grid-thickness':
				case 'grid-thickness-number':
					gridThicknessElement.value = event.target.value;
					gridThicknessElementRange.value = event.target.value;
					localStorage.setItem('gridThickness', event.target.value);
					drawGrid(ctx, canvas.width, canvas.height, cellSize, gridColorElement, gridThicknessElement, gridOpacity)
					break;
				case 'grid-opacity':
				case 'grid-opacity-number':
					gridOpacityElement.value = event.target.value;
					gridOpacityElementRange.value = event.target.value;
					localStorage.setItem('gridOpacity', event.target.value);
					let newOpacity = event.target.value /10;
					drawGrid(ctx, canvas.width, canvas.height, cellSize, gridColorElement, gridThicknessElement, newOpacity);	
					break;
				
				case 'floor-color':
				case 'floor-color-hex':
					floorColorElementHex.value = event.target.value;
					floorColorElement.value = event.target.value;
					localStorage.setItem('floorColor', event.target.value);
					drawGrid(ctx, canvas.width, canvas.height, cellSize, gridColorElement, gridThicknessElement, gridOpacity); 
					break;
					
			}
			
		})
	})

	function loadSettings(){
		// Load from localstorage and update the input values
		console.log('loading')
		const tempGridColor = localStorage.getItem('gridColor') || '#000000';
		const tempGridThickness = localStorage.getItem('gridThickness') || '3';
		const tempGridOpacity = localStorage.getItem('gridOpacity') || '5';
		const tempFloorColor = localStorage.getItem('floorColor') || '#000000';

		if (tempGridColor) {
			gridColorElement.value = tempGridColor; 
			gridColorElementHex.value = tempGridColor
		}
		if (tempGridThickness) {gridThicknessElement.value, gridThicknessElementRange.value = tempGridThickness}
		if (tempGridOpacity) {gridOpacityElement.value, gridOpacityElementRange = tempGridOpacity}
		if (tempFloorColor) {floorColorElement, floorColorElementHex = tempFloorColor}

		drawGrid(ctx, canvas.width, canvas.height, cellSize, gridColorElement, gridThicknessElement, gridOpacity);
		


	}
	
	


	

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
	drawSquare(ctx, x, y, cellSize, floorColorElement);
	[lastX, lastY] = [x, y];
	});
	canvas.addEventListener("mouseup", () => (isDrawing = false));
	canvas.addEventListener("mouseout", () => (isDrawing = false));

	canvas.addEventListener("click", (event) => {
		const rect = canvas.getBoundingClientRect();
		const scaleX = canvas.width / rect.width; // Adjust for any CSS scaling
		const scaleY = canvas.height / rect.height;
		const x = (event.clientX - rect.left) * scaleX;
		const y = (event.clientY - rect.top) * scaleY;
		drawSquare(ctx, x, y, cellSize, floorColorElement);
	});





	window.addEventListener("resize", () => {
		if (resizeCanvasToDisplaySize(canvas)) {
			drawGrid(ctx, canvas.width, canvas.height, cellSize, gridColorElement, gridThicknessElement, gridOpacity);
		}
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

});

// save wall width to local storage
let wallWidth = document.getElementById("walls-width-number");
wallWidth.addEventListener("input", () => {
  wallWidth = parseInt(event.target.value, 10);
  localStorage.setItem("walls-width-number", wallWidth);
});

// function HexTorgba(hex, opacity){
// 	hex = hex.replace('#','')

// 	let r = parseInt(hex.slice(0, 2), 16),
// 		g = parseInt(hex.slice(2, 4), 16), 
// 		b = parseInt(hex.slice(4, 6), 16) ;

// 	return `rgba(${r}, ${g}, ${b}, ${opacity})`
	
// }



function drawGrid(ctx, w, h, size, color, thickness, opacity) {
	ctx.beginPath();

	// #000000
	// RR GG BB -> 00 -> FF
	// 200, 40, 40, opacity

	// let newColor = HexTorgba(color.value, opacity);
	// console.log('opacity', opacity)
	// console.log('new color', newColor)
	// let rgbaColor = 
	// ctx.strokeStyle = newColor; 
	ctx.strokeStyle = color.value
	//   ctx.strokeStyle = color.value; // Set grid line color

	ctx.lineWidth = thickness;

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

function drawSquare(ctx, x, y, size, floorColorElement) {
  const startX = size * Math.floor(x / size);
  const startY = size * Math.floor(y / size);
  ctx.fillStyle = floorColorElement.value;
  ctx.fillRect(startX+1, startY+1, size-2, size-2);
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
