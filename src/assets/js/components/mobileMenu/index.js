// mobile menu 

(function(){

  const burgerEl = document.querySelector('.burger');
  const menuContainerEl =document.querySelector('.header__menu-container');
  
  burgerEl.addEventListener('click', function() {
    this.classList.toggle('burger_visible');
    menuContainerEl.classList.toggle('header__menu-container_visible');
    document.body.classList.toggle('content-hidden');
  });
}) ();

