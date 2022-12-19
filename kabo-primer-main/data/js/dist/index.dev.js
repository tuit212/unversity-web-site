"use strict";

$(document).ready(function () {
  // sticky navigation on scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });
  /*- animation -*/

  jQuery(".first_animation").addClass("invisible").viewportChecker({
    classToAdd: "visible animated fadeInLeftBig",
    offset: 100
  });
  jQuery(".second_animation").addClass("invisible").viewportChecker({
    classToAdd: "visible animated fadeInRightBig",
    offset: 100
  });
  jQuery(".third_animation").addClass("invisible").viewportChecker({
    classToAdd: "visible animated fadeInUpBig",
    offset: 100
  });
  jQuery(".fourth_animation").addClass("invisible").viewportChecker({
    classToAdd: "visible animated fadeInDownBig",
    offset: 100
  });
  $(".menu_btn").click(function () {
    if ($('.mobile_menu').hasClass('openMenu')) {
      $('.mobile_menu').removeClass("openMenu");
      $('.menu_btn').removeClass("showOverlay");
    } else {
      $('.mobile_menu').addClass("openMenu");
      $('.menu_btn').addClass("showOverlay");
    }
  }); // sliders

  var progressbar = $(".mry-slider-progress-bar");
  var swiper = new Swiper(".mry-main-slider", {
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    loop: true,
    parallax: true,
    //mousewheel: true,
    //mousewheel: {
    //releaseOnEdges: true,
    //},
    keyboard: true,
    speed: 1200,
    navigation: {
      nextEl: ".mry-button-next",
      prevEl: ".mry-button-prev"
    },
    pagination: {
      el: ".mry-slider-pagination",
      clickable: true
    },
    on: {
      init: function init() {
        progressbar.removeClass("animate");
        progressbar.removeClass("active");
        progressbar.eq(0).addClass("animate");
        progressbar.eq(0).addClass("active");
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        progressbar.removeClass("animate");
        progressbar.removeClass("active");
        progressbar.eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        progressbar.eq(0).addClass("animate");
      }
    }
  });
  $('#filetype').change(function () {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);else $(this).prev().text('Выберите файлы *');
  });
});