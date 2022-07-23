$(function () {
  $(".map__col-link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

$(function () {
  $(".gallery__slider").slick({
    dots: false,
    infinite: false,
    prevArrow:
      '<img class="slick-prev slick-arrow" src="images/ar-l.svg" alt="">',
    nextArrow:
      '<img class="slick-next slick-arrow" src="images/ar-r.svg" alt="">',
  });
});

$(function () {
  $(".gallery__item-inner").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title");
      },
    },
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
