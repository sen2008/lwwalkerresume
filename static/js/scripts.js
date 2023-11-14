/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Function to update the visitor count on the frontend
function updateVisitorCount(count) {
    document.getElementById("visitorCount").innerText = `Visitors: ${count}`;
}

// Fetch the current count when the page loads
fetch('https://us-west1-lwwalkerresume.cloudfunctions.net/visitorcounter', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
        updateVisitorCount(data.count);
    })
    .catch(error => console.error('Error fetching visitor count:', error));

// Increment the count when a new visitor arrives
fetch('https://us-west1-lwwalkerresume.cloudfunctions.net/visitorcounter', { method: 'POST' })
    .then(response => response.text())
    .then(data => {
        const newCount = parseInt(data.replace('New visitor count is ', ''), 10);
        updateVisitorCount(newCount);
    })
    .catch(error => console.error('Error updating visitor count:', error));
