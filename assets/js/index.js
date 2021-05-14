// scroll header

const header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
  } else {
    header.classList.remove("header_has-bg");
  }
});

// mobile menu 

const burgerEl = document.querySelector('.burger');
const menuContainerEl =document.querySelector('.header__menu-container');

burgerEl.addEventListener('click', function() {
  this.classList.toggle('burger_visible');
  menuContainerEl.classList.toggle('header__menu-container_visible');
  document.body.classList.toggle('content-hidden');
})