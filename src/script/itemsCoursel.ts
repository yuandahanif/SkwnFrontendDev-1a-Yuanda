/// <reference types="jquery" />

const scrollIfCourselOverflow = () => {
  // check if card is visible in horizontal view
  const activeCard = $(".product__list__coursel__item--active");
  const activeCardPosition = activeCard.position();
  const activeCardWidth = activeCard.width() ?? 0;
  const activeCardLeft = activeCardPosition?.left;
  const activeCardRight = activeCardLeft + activeCardWidth;
  console.log('file: itemsCoursel.ts:9 ~ scrollIfCourselOverflow ~ activeCardLeft:', activeCardLeft)
  console.log('file: itemsCoursel.ts:10 ~ scrollIfCourselOverflow ~ activeCardRight:', activeCardRight)

  if (activeCardLeft < 0) {
    const coursel = $(".product__list__coursel");
    coursel.scrollLeft(activeCardLeft);
    return;
  }

  if (activeCardRight > window.innerWidth) {
    const coursel = $(".product__list__coursel");
    coursel.scrollLeft(activeCardRight);
    return;
  }
};

const CourselSetup = () => {
  // ! coursel slider change active card to left
  $(".product__list__coursel__control__left").on("click", (e) => {
    const active = $(".product__list__coursel__item--active");
    const prev = active.prev();

    if (prev.length > 0) {
      active.removeClass("product__list__coursel__item--active");
      prev.addClass("product__list__coursel__item--active");
    } else {
      active.removeClass("product__list__coursel__item--active");
      $(".product__list__coursel__item")
        .last()
        .addClass("product__list__coursel__item--active");
    }

    scrollIfCourselOverflow();
  });

  // ! coursel slider change active card to right
  $(".product__list__coursel__control__right").on("click", (e) => {
    const active = $(".product__list__coursel__item--active");
    const next = active.next();

    if (next.length > 0) {
      active.removeClass("product__list__coursel__item--active");
      next.addClass("product__list__coursel__item--active");
    } else {
      active.removeClass("product__list__coursel__item--active");
      $(".product__list__coursel__item")
        .first()
        .addClass("product__list__coursel__item--active");
    }

    scrollIfCourselOverflow();
  });
};

export { CourselSetup };
