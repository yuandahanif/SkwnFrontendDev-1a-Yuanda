/// <reference types="jquery" />

import { getFurnitures } from "./api.js";
import { CourselSetup } from "./itemsCoursel.js";

// rander furniture item to html using innerHTML
const renderRecomendedFurnitureItem = async () => {
  try {
    const template = (
      src: string,
      alt: string,
      isActived: boolean = false
    ) => `<div class="product__coursel__item ${
      isActived ? "product__coursel__item--active" : ""
    }">
    <img
      src="${src}"
      alt="${alt}"
    />
  </div>`;

    const container = document.querySelector(".product__coursel");

    const data = await getFurnitures();
    const furniture = data.slice(0, 3);

    furniture.forEach((item, idx) => {
      const html = template(
        item.images[0],
        item.title,
        idx == furniture.length - 1
      );
      container?.insertAdjacentHTML("beforeend", html);
    });

    // ! recommended product on click
    $(".product__coursel__item").on("click", (e) => {
      $(".product__coursel__item").removeClass(
        "product__coursel__item--active"
      );
      e.currentTarget.classList.add("product__coursel__item--active");
    });
  } catch (error) {
    console.log(error);
    console.error("can not get data from api");
  }
};

const renderCourselFurnitureItem = async () => {
  try {
    const template = (
      src: string,
      alt: string,
      price: string,
      name: string,
      isActived: boolean = false
    ) => `<div class="product__list__coursel__item ${
      isActived ? "product__list__coursel__item--active" : ""
    }">
          <img
            src="${src}"
            alt="${alt}"
          />
          <span class="product__list__coursel__item__price">$${price}</span>
          <span class="product__list__coursel__item__name">${name}</span>
        </div>`;

    const container = document.querySelector(".product__list__coursel");
    const data = await getFurnitures();
    const furniture = data.slice(0, 8);

    furniture.forEach((item, idx) => {
      const html = template(
        item.images[0],
        item.title,
        item.price.toString(),
        item.title,
        idx == 0
      );
      container?.insertAdjacentHTML("beforeend", html);
    });

    CourselSetup();
  } catch (error) {
    console.log(error);
    console.error("can not get data from api");
  }
};

export { renderRecomendedFurnitureItem, renderCourselFurnitureItem };
