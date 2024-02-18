// Set initial state based on whether the sidebars are initially hidden or not
window.addEventListener('DOMContentLoaded', (event) => {
    // sidebar variables
    const leftSidebar = document.getElementById('leftSidebar');
    const rightSidebar = document.getElementById('rightSidebar');
    const toggleIconL = document.getElementById('toggleIconL');
    const toggleIconR = document.getElementById('toggleIconR');
    const toggleIconNav = document.getElementById('toggleIconNav');
    // canvas variables
    


    // Assume sidebars are initially visible; adjust if they start off hidden
    leftSidebarOpen = !leftSidebar.classList.contains('hidden');
    rightSidebarOpen = !rightSidebar.classList.contains('hidden');
    navbarOpen = !navbar.classList.contains('hidden');
    // Set the initial rotation of the toggle icons
    toggleIconL.style.transform = leftSidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    toggleIconR.style.transform = rightSidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    toggleIconNav.style.transform = navbarOpen ? 'rotate(180deg)' : 'rotate(0deg)';





});

function toggleSidebarL() {
    console.log('toggling left toolbar');
    const leftSidebar = document.getElementById('leftSidebar');
    const toggleIconL = document.getElementById('toggleIconL');
    leftSidebar.classList.toggle('hidden');
    leftSidebarOpen = !leftSidebarOpen;
    toggleIconL.style.transform = leftSidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}

function toggleSidebarR() {
    console.log('toggling right toolbar');
    const rightSidebar = document.getElementById('rightSidebar');
    const toggleIconR = document.getElementById('toggleIconR');
    rightSidebar.classList.toggle('hidden');
    rightSidebarOpen = !rightSidebarOpen;
    toggleIconR.style.transform = rightSidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}

function toggleNavbar() {
    console.log('toggleing navbar');
    const navbar = document.getElementById('navbar');
    const toggleIconNav = document.getElementById('toggleIconNav');
    navbar.classList.toggle('hidden');
    navbarOpen = !navbarOpen; 
    toggleIconNav.style.transform = navbarOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    const movesWithNavbar = document.getElementById('nav-adjustment');
    movesWithNavbar.classList.toggle('pl-72')
}
