// JavaScript for SungYoon's Portfolio Website

// Function to navigate to the selected portfolio section
function navigateTo(section) {
    if (section === 'sonics') {
        window.location.href = 'sonics.html'; // Make sure to replace with the correct URL
    } else if (section === 'visuals') {
        window.location.href = 'visuals.html'; // Make sure to replace with the correct URL
    }
}

// Function to toggle the menu overlay
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

