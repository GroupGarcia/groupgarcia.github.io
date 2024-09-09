// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navResponsive = document.querySelector('.nav-responsive');
    const menuMovil = document.querySelector('#menu-movil');

    navResponsive.addEventListener('click', function() {
        menuMovil.classList.toggle('active');
    });
});
