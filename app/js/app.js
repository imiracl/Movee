// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  //	$('#nav-menu').toggleClass('isactive');
});

let Myhamburger = document.getElementById("Myhamburger");
let nav_menu = document.getElementById("nav-menu");
let body = document.getElementById("boody");
console.log(body);

Myhamburger.addEventListener("click", () => {
  if (Myhamburger.classList.contains("is-active")) {
    Myhamburger.classList.remove("is-active");
    nav_menu.classList.remove("is-active");
    nav_menu.classList.remove("open-menu");
    body.classList.remove("hide_scroll");
  } else {
    Myhamburger.classList.add("is-active");
    nav_menu.classList.add("is-active");
    nav_menu.classList.add("open-menu");
    body.classList.add("hide_scroll");
  }
});

let allPrices = document.getElementById("all__prices__hide");
let Cards = document.getElementsByClassName("card_hidden");

allPrices.addEventListener("click", () => {
  // for ( element of Cards){

  // 	element.classList.toggle('card_hidden');

  // }
  for (let index = 0; index < Cards.length; index++) {
		
		while (index < Cards.length ) {
			
			Cards[index].classList.toggle("card_hidden");
			
		}
  }
});



// SWIPER SLIDER

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
 
  loop: true,

  // If we need pagination
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 
});

