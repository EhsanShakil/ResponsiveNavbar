const hamburger = document.getElementById('toggle-button');
const navMenu = document.getElementById('navbar-menu');

hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('open');
})