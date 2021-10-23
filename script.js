/** @format */

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	if (window.scrollY > 0) {
		document.querySelector('.header').classList.add('active');
	} else {
		document.querySelector('.header').classList.remov('active');
	}

	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
};
