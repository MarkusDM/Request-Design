"use strict";



const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination__bullet',
    bulletActiveClass: 'swiper-pagination__bullet--active',
    clickable: true,
    type: 'bullets',   
  },
  

  breakpoints: {
  
    320: {
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    },
  
  },
  
});

let btnMenu = document.querySelector(".burger");
// Берём меню
let ulMenu = document.querySelector(".header__top");

btnMenu.addEventListener("click", function () {
  ulMenu.classList.toggle("show-menu");
  btnMenu.classList.toggle("btn-show-menu");
});


let btnEquipment = document.querySelector(".categories__btn");
// Берём меню
let equipmentMenu = document.querySelector(".categories");

btnEquipment.addEventListener("click", function () {

  equipmentMenu.classList.toggle("show-menu--2");
  btnEquipment.classList.toggle("btn-show-menu");
});



document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.burger span').classList.toggle('active');

});

$(document).ready(function () {

  let scrollPrev = 0;

  $(window).scroll(function () {
    if (window.innerWidth <= '1136') return;
    let top = $(document).scrollTop();


    if ((top > scrollPrev) && (top >= 400)) {
      $(".categories").slideUp();
    } else {
      $(".categories").slideDown();
    };


    scrollPrev = top;
  });
});



function accordeon() {

  const contactsList = document.querySelectorAll('.contacts__title');

  contactsList.forEach(link => {
    link.addEventListener(`click`, (evt) => {
      evt.target.closest(`.contacts__list`).classList.toggle(`contacts__list-active`);
    })
  })

}
accordeon();

!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {

  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');


  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

      modalElem.classList.add('active');
      overlay.classList.add('active');
    });

  });


  closeButtons.forEach(function (item) {

    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });

  });

  document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {

      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
    };
  }, false);

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });

});

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

let swiperwok = new Swiper(`#menu-categories`, {
  slidesPerView: 'auto',
  spaceBetween: 11,
  // pagination: {
  //   el: '.swiper-pagination',
  //   bulletClass: 'swiper-pagination__bullet',
  //   bulletActiveClass: 'swiper-pagination__bullet--active',
  //   clickable: true,
  //   type: 'bullets',   
  // },
  loop: false,

  breakpoints: {
    1: {
      slidesPerView: 'auto',
      spaceBetween: 11,
    },
    // 750: {
    //   centeredSlides: false,
    //   slidesPerView: 3,
    //   loopedSlides: 3,
    // },

    1000: {
      slidesPerView: 8,
    },
    1100: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 11,
    },
    debugger: false
  },

});