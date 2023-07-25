/// <reference types="jquery" />

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
  console.log("file: index.ts:16 ~ $ ~ scroll:", scroll);

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

// ! recommended product on click
$(".product__coursel__item").on("click", (e) => {
  $(".product__coursel__item").removeClass("product__coursel__item--active");
  e.currentTarget.classList.add("product__coursel__item--active");
});
