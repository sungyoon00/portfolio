// JavaScript for SungYoon's Portfolio Website

// Function to navigate to the selected portfolio section
function navigateTo(section) {
    if (section === 'film') {
        window.location.href = 'film.html'; // Make sure to replace with the correct URL
    } else if (section === 'photography') {
        window.location.href = 'photography.html'; // Make sure to replace with the correct URL
    }
}

// Function to toggle the menu overlay
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

