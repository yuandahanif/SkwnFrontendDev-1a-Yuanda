/// <reference types="jquery" />
import { renderRecomendedFurnitureItem, renderCourselFurnitureItem, } from "./script/render.js";
$(window).on("load", (e) => {
    renderRecomendedFurnitureItem();
    renderCourselFurnitureItem();
    // ! toggle mobile navigation menu
    $("#mobile_nav_button").on("click", (e) => {
        $("#main_nav").toggleClass("nav-active");
    });
    $("#main_nav > ul > li a").on("click", (e) => {
        $("#main_nav").toggleClass("nav-active");
    });
    // ! on scroll
    $(window).on("scroll", (e) => {
        var _a;
        const scroll = (_a = $(window)) === null || _a === void 0 ? void 0 : _a.scrollTop();
        if (scroll && scroll > 10) {
            $("header").addClass("shadow");
        }
        else {
            $("header").removeClass("shadow");
        }
    });
    // ! expand recommend section description
    $(".product__detail__recommendation__item").on("click", (e) => {
        e.stopPropagation();
        $(".product__detail__recommendation__item--active").removeClass("product__detail__recommendation__item--active");
        e.currentTarget.classList.toggle("product__detail__recommendation__item--active");
    });
});
