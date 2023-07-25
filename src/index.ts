/// <reference types="jquery" />

import {
  renderRecomendedFurnitureItem,
  renderCourselFurnitureItem,
} from "./script/render.js";

$(window).on("load", (e) => {
  renderRecomendedFurnitureItem();
  renderCourselFurnitureItem();
});

// ! toggle mobile navigation menu
$("#mobile_nav_button").on("click", (e) => {
  $("#main_nav").toggleClass("nav-active");
});

$("#main_nav > ul > li a").on("click", (e) => {
  $("#main_nav").toggleClass("nav-active");
});

// ! on scroll
let itter = 0;
$(window).on("scroll", (e) => {
  const scroll = $(window)?.scrollTop();

  if (scroll && scroll > 100) {
    $("header").addClass("shadow");
  } else {
    $("header").removeClass("shadow");
  }

  if (itter == 0 && scroll && scroll > 600) {
    const intervalId = setInterval(() => {
      itter++;
      $("#partner_count").text(`${itter}+`);

      if (itter > 20) {
        clearInterval(intervalId);
      }
    }, 100);
  }
});
