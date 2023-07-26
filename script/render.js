/// <reference types="jquery" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getFurnitures } from "./api.js";
import { CourselSetup } from "./itemsCoursel.js";
// rander furniture item to html using innerHTML
const renderRecomendedFurnitureItem = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const template = (src, alt, isActived = false) => `<div class="product__coursel__item ${isActived ? "product__coursel__item--active" : ""}">
    <img
      src="${src}"
      alt="${alt}"
    />
  </div>`;
        const container = document.querySelector(".product__coursel");
        const data = yield getFurnitures();
        const furniture = data.slice(0, 3);
        furniture.forEach((item, idx) => {
            const html = template(item.images[0], item.title, idx == furniture.length - 1);
            container === null || container === void 0 ? void 0 : container.insertAdjacentHTML("beforeend", html);
        });
        // ! recommended product on click
        $(".product__coursel__item").on("click", (e) => {
            $(".product__coursel__item").removeClass("product__coursel__item--active");
            e.currentTarget.classList.add("product__coursel__item--active");
        });
    }
    catch (error) {
        console.log(error);
        console.error("can not get data from api");
    }
});
const renderCourselFurnitureItem = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const template = (src, alt, price, name, isActived = false) => `<div class="product__list__coursel__item ${isActived ? "product__list__coursel__item--active" : ""}">
          <img
            src="${src}"
            alt="${alt}"
          />
          <span class="product__list__coursel__item__price">$${price}</span>
          <span class="product__list__coursel__item__name">${name}</span>
        </div>`;
        const container = document.querySelector(".product__list__coursel");
        const data = yield getFurnitures();
        const furniture = data.slice(0, 8);
        furniture.forEach((item, idx) => {
            const html = template(item.images[0], item.title, item.price.toString(), item.title, idx == 0);
            container === null || container === void 0 ? void 0 : container.insertAdjacentHTML("beforeend", html);
        });
        CourselSetup();
    }
    catch (error) {
        console.log(error);
        console.error("can not get data from api");
    }
});
export { renderRecomendedFurnitureItem, renderCourselFurnitureItem };
