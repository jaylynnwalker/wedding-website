// Targeting items in the html
//const menu = document.querySelector('#offcanvas-menu') // hamburger icon
const menuLinks = document.querySelector('.navbar__menu') // navigation bar

// Toggle the off-canvas menu
function toggleMenu() {
    const menu = document.getElementById('offcanvas-menu');
    menu.classList.toggle('active');
}

// Close mobile menu when clicking on a menu item
function closeMenu() {
    const menu = document.getElementById('offcanvas-menu');
    menu.classList.remove('active');
}

// Add event listener to each menu item
const menuItems = document.querySelectorAll('#offcanvas-menu a');
menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});


// // Close the menu if the user clicks outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById('offcanvas-menu');
    const toggleButton = document.querySelector('.navbar__toggle');
    
    // Check if the click was outside the menu and toggle button
    if (menu.classList.contains('active') && 
        !menu.contains(event.target) && 
        !toggleButton.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Coundown timer
function startCountdown(targetDate) {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = 
                days + " days " + hours + "h " + minutes + "m " + seconds + "s";
        } else {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "TIME'S UP!";
        }
    }

    // Run updateCountdown every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Run countdown when the page loads
window.onload = function () {
    const eventDate = new Date("January 4, 2026 00:00:01").getTime();
    startCountdown(eventDate);
};
