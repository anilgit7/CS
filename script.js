let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}



document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

/************** Active Nav Menus ***********/

const li=document.querySelectorAll(".links");
const a_menu=document.querySelectorAll(".active_menu");

function activeMenu(){
  let len=a_menu.length;
  while(--len && window.scrollY +97 < a_menu[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

/*************************************************/

/******************* Swiper Script *****************/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

});
/*****************************************************************/
/**************************** Loader Script ******************/
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;
/***************************************************************/