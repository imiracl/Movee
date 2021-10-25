// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  //$('#nav-menu').toggleClass('isactive');
  

});

//swiper reload
function initSwiper(){
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
   
    loop: true,
    observer: true,
    observeParents: true,
    

    // If we need pagination
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  
  });
  
}


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



let tablabel = document.getElementsByClassName("tab-label");

function ListTable() {
  for (let i = 0 ; i < tablabel.length; i++){
    tablabel[i].addEventListener("click" , ()=>{
      for (j of tablabel){
        j.classList.remove("tab-active");
        
      }
      tablabel[i].classList.add("tab-active");
      initSwiper();
     
    })
  }
}
ListTable();
initSwiper();









function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();
