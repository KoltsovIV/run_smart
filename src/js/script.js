// //slick slider

$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: false
          }
        }
      ]
    });
  });
// *************************************************************************

// // Tiny Slider 2

// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   controls: false,
//   nav: false,
//   responsive: {
//     640: {
//       edgePadding: 20,
//       gutter: 20,
//       items: 1
//     },
//     700: {
//       gutter: 30
//     },
//     992: {
//       autoWidth: true,
//       items: 1
//     }
//   }
// });

// document.querySelector('.prev').addEventListener('click', function () {
//   slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//   slider.goTo('next');
// });
// ***********************************************************