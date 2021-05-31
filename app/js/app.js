// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

})

let Myhamburger = document.getElementById("Myhamburger");
console.log(Myhamburger);

Myhamburger.addEventListener("click" , ()=>{
	if (Myhamburger.classList.contains('is-active')){
		Myhamburger.classList.remove("is-active");
	}
	else{
		Myhamburger.classList.add("is-active");
	}
	
})

