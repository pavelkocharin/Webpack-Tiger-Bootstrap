'use strict'
// при раскрытии тогглер-меню слайдер скрывается на мобильной версии
window.onload = function(e){
  var togglerMobile = document.querySelector('.navbar-toggler');

  function hideSlider(){
    var menuMobile = document.querySelector('.navbar-collapse');
    var headerSlider = document.querySelector('.header__slider');

    if (!menuMobile.classList.contains('show')) {
      headerSlider.classList.remove('d-md-block');
      headerSlider.classList.add('d-none');
    } else {
      headerSlider.classList.add('d-md-block');
    }
    
  };

    togglerMobile.addEventListener('click', hideSlider);
    
  }();
