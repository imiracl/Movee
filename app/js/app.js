// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
//	$('#nav-menu').toggleClass('isactive');

})

let Myhamburger = document.getElementById("Myhamburger");
let nav_menu = document.getElementById("nav-menu");
console.log(Myhamburger);

Myhamburger.addEventListener("click" , ()=>{
	if (Myhamburger.classList.contains('is-active')){
		Myhamburger.classList.remove("is-active");
		nav_menu.classList.remove("is-active");
		nav_menu.classList.remove("open-menu");

	}
	else{
		Myhamburger.classList.add("is-active");
		nav_menu.classList.add("is-active");
		nav_menu.classList.add("open-menu");
	}
	
})

