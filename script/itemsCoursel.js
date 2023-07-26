/// <reference types="jquery" />
const scrollIfCourselOverflow = () => {
    var _a;
    // check if card is visible in horizontal view
    const activeCard = $(".product__list__coursel__item--active");
    const activeCardPosition = activeCard.position();
    const activeCardWidth = (_a = activeCard.width()) !== null && _a !== void 0 ? _a : 0;
    const activeCardLeft = activeCardPosition === null || activeCardPosition === void 0 ? void 0 : activeCardPosition.left;
    const activeCardRight = activeCardLeft + activeCardWidth;
    if (activeCardLeft < 0) {
        const coursel = $(".product__list__coursel");
        coursel.scrollLeft(activeCardRight);
        return;
    }
    if (activeCardRight > window.innerWidth) {
        const coursel = $(".product__list__coursel");
        coursel.scrollLeft(activeCardLeft);
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
        }
        else {
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
        }
        else {
            active.removeClass("product__list__coursel__item--active");
            $(".product__list__coursel__item")
                .first()
                .addClass("product__list__coursel__item--active");
        }
        scrollIfCourselOverflow();
    });
};
export { CourselSetup };
