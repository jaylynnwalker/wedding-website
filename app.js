// Targeting items in the html
const menu = document.querySelector('#mobile-menu') // hamburger icon
const menuLinks = document.querySelector('.navbar__menu') // navigation bar
const navLogo = document.querySelector('#navbar__logo')

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
// const highlightMenu = () => {
//     const elem = document.querySelector('.highlight')
//     const homeMenu = document.querySelector('#home-page')
//     const ourStoryMenu = document.querySelector('#ourStory-page')
//     const itineraryMenu = document.querySelector('#itinerary')
//     const travelMenu = document.querySelector('#travel-page')
//     const eventsMenu = document.querySelector('#events-page')
//     const faqMenu = document.querySelector('#faq-page')
//     let scrollPos = window.scrollY // Scroll position
//     console.log(scrollPos)
//     // Adds the 'highlight' class to the menu items
//     if(window.innerWidth > 1174 && scrollPos < 600) { // only want the highlight feature to show on desktop view
//         homeMenu.classList.add('highlight')
//         ourStoryMenu.classList.remove('highlight')
//         return
//         // for the Our Story page
//     }   else if (window.innerWidth > 1174 && scrollPos <4300) {
//         ourStoryMenu.classList.add('highlight')
//         homeMenu.classList.remove('highlight')
//         itineraryMenu.classList.remove('highlight')
//         return
//         // for the Itinerary page
//     }   else if (window.innerWidth > 1174 && scrollPos < 2800) {
//         itineraryMenu.classList.add('highlight')
//         ourStoryMenu.classList.remove('highlight')
//         travelMenu.classList.remove('highlight')
//         return
//         // for the Travel page
//     }   else if (window.innerWidth > 1174 && scrollPos < 7100) {
//         travelMenu.classList.add('highlight')
//         eventsMenu.classList.remove('highlight')
//         itineraryMenu.classList.remove('highlight')
//         return
//         // for the Event Guide page
//     }   else if (window.innerWidth > 1174 && scrollPos < 8500) {
//         eventsMenu.classList.add('highlight')
//         travelMenu.classList.remove('highlight')
//         faqMenu.classList.remove('highlight')
//         return
//         // for the FAQ page
//     }   else if (window.innerWidth > 1174 && scrollPos < 4900) {
//         faqMenu.classList.add('highlight')
//         eventsMenu.classList.remove('highlight')
//         return
//     }
//     if((elem && window.innerWidth < 1174 && scrollPos < 9500) || elem) {
//         elem.classList.remove('highlight')
//     }
// }
window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    // if view is mobile and menu is open
    if (window.innerWidth <= 768 && menuBars) {    
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    document.querySelector('.navbar__menu.active').style.height = `calc(${window.innerHeight}px - 60px)`;
}