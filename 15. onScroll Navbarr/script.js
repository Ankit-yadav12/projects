let nav = document.querySelector('#navbar');
let lastScrollTop = 0; // Track the previous scroll position

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY; // Get current scroll position

    if (scrollTop > lastScrollTop) {
        nav.classList.remove('sticky');
        console.log("Scrolling down, navbar normal");
    } else {
        nav.classList.add('sticky');
        console.log("Scrolling up, navbar sticky");
    }

    lastScrollTop = scrollTop; // Update previous scroll position
});
