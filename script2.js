// JavaScript for SungYoon's Portfolio Website

// Function to navigate to the selected portfolio section
function navigateTo(section) {
    if (section === 'sounddesign') {
        window.location.href = 'sounddesign.html'; // Make sure to replace with the correct URL
    }  if (section === 'production') {
        window.location.href = 'production.html'; // Make sure to replace with the correct URL
    } else if (section === 'performance') {
        window.location.href = 'performance.html'; // Make sure to replace with the correct URL
    }
}

// Function to toggle the menu overlay
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}


